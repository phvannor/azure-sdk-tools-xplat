/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var __ = require('underscore');

var interaction = require('../util/interaction');
var utils = require('../util/utils');

exports.init = function (cli) {

  var log = cli.output;
  var site = cli.category('site');
  var siteDomain = site.category('domain')
    .description('Commands to manage your Web Site domains');

  siteDomain.command('list [name]')
    .usage('[options] [name]')
    .description('Show your site default documents')
    .option('-s, --subscription <id>', 'use the subscription id')
    .execute(function (name, options, _) {
      var context = {
        subscription: cli.category('account').lookupSubscriptionId(options.subscription),
        site: { name: name }
      };

      site.lookupSiteNameAndWebSpace(context, _);

      var siteConfigurations = site.doSiteGet(context, _);
      siteConfigurations.HostNames = getHostNames(siteConfigurations.HostNames);
      interaction.formatOutput(cli, siteConfigurations.HostNames['a:string'], function (data) {
        if (data.length > 0) {
          log.table(data, function (row, item) {
            row.cell('Name', item);
          });
        } else {
          log.info('No host names defined yet.');
        }
      });
    });

  siteDomain.command('add [domain] [name]')
    .usage('[options] [name]')
    .description('Add a site domain')
    .option('-d, --domain <domain>', 'the new domain')
    .option('-s, --subscription <id>', 'use the subscription id')
    .execute(function (domain, name, options, _) {
      var context = {
        subscription: cli.category('account').lookupSubscriptionId(options.subscription),
        site: { name: name }
      };

      var params = utils.normalizeParameters({
        domain: [domain, options.domain]
      });

      if (params.err) { throw params.err; }

      domain = interaction.promptIfNotGiven(cli, 'Domain: ', params.values.domain, _);

      site.lookupSiteNameAndWebSpace(context, _);

      var siteConfigurations = site.doSiteGet(context, _);
      siteConfigurations.HostNames = getHostNames(siteConfigurations.HostNames);
      siteConfigurations.HostNames['a:string'].push(domain);
      site.doSitePUT(context,  {
        HostNames: siteConfigurations.HostNames
      }, _);
    });

  siteDomain.command('delete [domain] [name]')
    .usage('[options] [name]')
    .description('Deletes a site domain')
    .option('-d, --domain <domain>', 'the new domain')
    .option('-q, --quiet', 'quiet mode, do not ask for delete confirmation')
    .option('-s, --subscription <id>', 'use the subscription id')
    .execute(function (domain, name, options, _) {
      var context = {
        subscription: cli.category('account').lookupSubscriptionId(options.subscription),
        site: { name: name }
      };

      var params = utils.normalizeParameters({
        domain: [domain, options.domain]
      });

      if (params.err) { throw params.err; }

      domain = interaction.promptIfNotGiven(cli, 'Domain: ', params.values.domain, _);

      if (!options.quiet && !confirm('Delete ' + domain + ' domain?  (y/n) ', _)) {
        return;
      }

      site.lookupSiteNameAndWebSpace(context, _);

      var siteConfigurations = site.doSiteGet(context, _);
      var found = false;
      if (siteConfigurations.HostNames && siteConfigurations.HostNames['a:string']) {
        siteConfigurations.HostNames = getHostNames(siteConfigurations.HostNames);

        for (var i = 0; i < siteConfigurations.HostNames['a:string'].length; i++) {
          if (utils.ignoreCaseEquals(siteConfigurations.HostNames['a:string'][i], domain)) {
            siteConfigurations.HostNames['a:string'].splice(i, 1);
            found = true;
            i--;
          }
        }

        if (found) {
          if (siteConfigurations.HostNames['a:string'].length === 0) {
            siteConfigurations.HostNames = { };
          }

          site.doSitePUT(context, {
            HostNames: siteConfigurations.HostNames
          }, _);
        }
      }

      if (!found) {
        throw new Error('Domain "' + domain + '" does not exist.');
      }
    });

  function getHostNames(domains) {
    if (!domains) {
      domains = {
        '$': {
          'xmlns:a': 'http://schemas.microsoft.com/2003/10/Serialization/Arrays'
        }
      };
    }

    if (!domains['a:string']) {
      domains['a:string'] = [ ];
    } else if (!__.isArray(domains['a:string'])) {
      domains['a:string'] = [ domains['a:string'] ];
    }

    return domains;
  }
};