// This file has been autogenerated.

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/')
  .reply(200, "<WebSpaces xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>hk1</GeoLocation><GeoRegion>East Asia</GeoRegion><Name>eastasiawebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>BLU</GeoLocation><GeoRegion>East US</GeoRegion><Name>eastuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>CH1</GeoLocation><GeoRegion>North Central US</GeoRegion><Name>northcentraluswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>DB3</GeoLocation><GeoRegion>North Europe</GeoRegion><Name>northeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>AM2</GeoLocation><GeoRegion>West Europe</GeoRegion><Name>westeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>bay</GeoLocation><GeoRegion>West US</GeoRegion><Name>westuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace></WebSpaces>", { 'cache-control': 'private',
  'content-length': '2732',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.68 (rd_rdfe_stable.130710-0833) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '6d1a2245e95d49f8846b91272b5622d4',
  date: 'Thu, 25 Jul 2013 13:39:34 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/northcentraluswebspace/sites/?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", { 'cache-control': 'private',
  'content-length': '110',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.68 (rd_rdfe_stable.130710-0833) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'beda431ee3d94e8a8d286ddeec83de31',
  date: 'Thu, 25 Jul 2013 13:39:37 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/westeuropewebspace/sites/?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", { 'cache-control': 'private',
  'content-length': '110',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.68 (rd_rdfe_stable.130710-0833) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'd503220a5ba74ad3a28175f484f08afc',
  date: 'Thu, 25 Jul 2013 13:39:37 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/northeuropewebspace/sites/?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", { 'cache-control': 'private',
  'content-length': '110',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.68 (rd_rdfe_stable.130710-0833) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '80251335fafd406ebf5d1c5ce990abe0',
  date: 'Thu, 25 Jul 2013 13:39:38 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/eastuswebspace/sites/?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><ComputeMode>Shared</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitests1.azurewebsites.net</a:string><a:string>clitests1.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitests1.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitests1.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitests1.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2013-07-25T13:34:21.653</LastModifiedTimeUtc><Name>clitests1</Name><Owner i:nil=\"true\"/><RepositorySiteName>clitests1</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-blu-001.api.azurewebsites.windows.net:454/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/eastuswebspace/sites/clitests1</SelfLink><ServerFarm i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://clitests1.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$clitests1</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>1eBpbhNyqcddBhZ8Jx5aDrjslhTzwboCmxrbr6aN8dkLRZ2gKmlY0u31a56G</Value></NameValuePair></Properties></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><UsageState>Normal</UsageState><WebSpace>eastuswebspace</WebSpace></Site><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><ComputeMode>Shared</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitsts1.azurewebsites.net</a:string><a:string>clitsts1.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitsts1.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitsts1.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitsts1.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2013-07-25T13:35:26.887</LastModifiedTimeUtc><Name>clitsts1</Name><Owner i:nil=\"true\"/><RepositorySiteName>clitsts1</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-blu-001.api.azurewebsites.windows.net:454/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/eastuswebspace/sites/clitsts1</SelfLink><ServerFarm i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://clitsts1.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$clitsts1</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>zisyPxic2kssHBY0uSbxu55MAwDdvuCnabcxq2P7cbwjbeXk8xfcZRox31lS</Value></NameValuePair></Properties></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><UsageState>Normal</UsageState><WebSpace>eastuswebspace</WebSpace></Site></Sites>", { 'cache-control': 'private',
  'content-length': '4401',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.68 (rd_rdfe_stable.130710-0833) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'b5bdd9f825e04998a5bdc9f0420ab234',
  date: 'Thu, 25 Jul 2013 13:39:37 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/eastasiawebspace/sites/?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", { 'cache-control': 'private',
  'content-length': '110',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.68 (rd_rdfe_stable.130710-0833) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '78f40c6b065b48b7b09355b1c9d07ed8',
  date: 'Thu, 25 Jul 2013 13:39:37 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/westuswebspace/sites/?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><ComputeMode>Dedicated</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>asdasdasdqw.azurewebsites.net</a:string><a:string>asdasdasdqw.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>asdasdasdqw.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>asdasdasdqw.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>asdasdasdqw.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2013-07-23T16:08:02.1</LastModifiedTimeUtc><Name>asdasdasdqw</Name><Owner i:nil=\"true\"/><RepositorySiteName>asdasdasdqw</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-bay-001.api.azurewebsites.windows.net:454/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/westuswebspace/sites/asdasdasdqw</SelfLink><ServerFarm>DefaultServerFarm</ServerFarm><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://asdasdasdqw.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$asdasdasdqw</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>NpfqzCDtPLy9Mw0TrMpdG1QtAYTyojceCNEdJk2zBMn2gv1QngaLtnvWN4WN</Value></NameValuePair></Properties></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><UsageState>Normal</UsageState><WebSpace>westuswebspace</WebSpace></Site><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><ComputeMode>Dedicated</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>asdqweqwe.azurewebsites.net</a:string><a:string>asdqweqwe.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>asdqweqwe.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>asdqweqwe.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>asdqweqwe.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2013-07-25T13:19:41.11</LastModifiedTimeUtc><Name>asdqweqwe</Name><Owner i:nil=\"true\"/><RepositorySiteName>asdqweqwe</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-bay-001.api.azurewebsites.windows.net:454/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/westuswebspace/sites/asdqweqwe</SelfLink><ServerFarm>DefaultServerFarm</ServerFarm><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://asdqweqwe.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$asdqweqwe</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>kQghPotD1e7MT8v3zPvRkFpHiYiePce58BkMwRc1ftZ1JGbzGLZ2jG57H8ma</Value></NameValuePair></Properties></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><UsageState>Normal</UsageState><WebSpace>westuswebspace</WebSpace></Site><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><ComputeMode>Dedicated</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>dfgdfgdfg.azurewebsites.net</a:string><a:string>dfgdfgdfg.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>dfgdfgdfg.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>dfgdfgdfg.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>dfgdfgdfg.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2013-07-23T16:08:02.907</LastModifiedTimeUtc><Name>dfgdfgdfg</Name><Owner i:nil=\"true\"/><RepositorySiteName>dfgdfgdfg</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-bay-001.api.azurewebsites.windows.net:454/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/westuswebspace/sites/dfgdfgdfg</SelfLink><ServerFarm>DefaultServerFarm</ServerFarm><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://dfgdfgdfg.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$dfgdfgdfg</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>weSrJ02Wg705JHJvgvpM4dDz65aTsC6yl5x45M7Gnpwlm7Jrc8lyauCbiFEz</Value></NameValuePair></Properties></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><UsageState>Normal</UsageState><WebSpace>westuswebspace</WebSpace></Site><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><ComputeMode>Dedicated</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>iuhihiuh.azurewebsites.net</a:string><a:string>iuhihiuh.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>iuhihiuh.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>iuhihiuh.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>iuhihiuh.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2013-07-23T16:08:03.263</LastModifiedTimeUtc><Name>iuhihiuh</Name><Owner i:nil=\"true\"/><RepositorySiteName>iuhihiuh</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-bay-001.api.azurewebsites.windows.net:454/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/westuswebspace/sites/iuhihiuh</SelfLink><ServerFarm>DefaultServerFarm</ServerFarm><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://iuhihiuh.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$iuhihiuh</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>DjtPdZWJ0fuku3D5hMyQhFroz9tXvobhZaFgzHddPymXlQpCunAoQDPx03vD</Value></NameValuePair></Properties></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><UsageState>Normal</UsageState><WebSpace>westuswebspace</WebSpace></Site><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><ComputeMode>Dedicated</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>zxczxcxz.azurewebsites.net</a:string><a:string>zxczxcxz.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>zxczxcxz.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>zxczxcxz.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>zxczxcxz.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2013-07-23T16:08:03.507</LastModifiedTimeUtc><Name>zxczxcxz</Name><Owner i:nil=\"true\"/><RepositorySiteName>zxczxcxz</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-bay-001.api.azurewebsites.windows.net:454/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/westuswebspace/sites/zxczxcxz</SelfLink><ServerFarm>DefaultServerFarm</ServerFarm><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://zxczxcxz.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$zxczxcxz</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>jbnBHcogyPRLBcYv6TylqkYurNd2rzsLvoqQA8yootwWSA9pLgr5cqwX33wj</Value></NameValuePair></Properties></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><UsageState>Normal</UsageState><WebSpace>westuswebspace</WebSpace></Site></Sites>", { 'cache-control': 'private',
  'content-length': '10944',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.68 (rd_rdfe_stable.130710-0833) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '949d4e170ce84f6f876da945224cf529',
  date: 'Thu, 25 Jul 2013 13:39:38 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/?properties=georegions')
  .reply(200, "<GeoRegions xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><GeoRegion><Description i:nil=\"true\"/><Name>North Europe</Name><SortOrder>0</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>North Central US</Name><SortOrder>1</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>West US</Name><SortOrder>2</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>East US</Name><SortOrder>3</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>East Asia</Name><SortOrder>4</SortOrder></GeoRegion></GeoRegions>", { 'cache-control': 'private',
  'content-length': '613',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.68 (rd_rdfe_stable.130710-0833) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '46516a4f3a3b4e3d8a8fc78e1419ce01',
  date: 'Thu, 25 Jul 2013 13:39:41 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/')
  .reply(200, "<WebSpaces xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>hk1</GeoLocation><GeoRegion>East Asia</GeoRegion><Name>eastasiawebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>BLU</GeoLocation><GeoRegion>East US</GeoRegion><Name>eastuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>CH1</GeoLocation><GeoRegion>North Central US</GeoRegion><Name>northcentraluswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>DB3</GeoLocation><GeoRegion>North Europe</GeoRegion><Name>northeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>AM2</GeoLocation><GeoRegion>West Europe</GeoRegion><Name>westeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>bay</GeoLocation><GeoRegion>West US</GeoRegion><Name>westuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace></WebSpaces>", { 'cache-control': 'private',
  'content-length': '2732',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.68 (rd_rdfe_stable.130710-0833) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '06ef6ad0622744f3a89b03b850fb625f',
  date: 'Thu, 25 Jul 2013 13:39:43 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/eastuswebspace/sites/clitsts1/config')
  .reply(200, "<SiteConfig xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AppSettings/><ConnectionStrings/><DefaultDocuments xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>Default.htm</a:string><a:string>Default.html</a:string><a:string>Default.asp</a:string><a:string>index.htm</a:string><a:string>index.html</a:string><a:string>iisstart.htm</a:string><a:string>default.aspx</a:string><a:string>index.php</a:string><a:string>hostingstart.html</a:string></DefaultDocuments><DetailedErrorLoggingEnabled>false</DetailedErrorLoggingEnabled><DocumentRoot i:nil=\"true\"/><HandlerMappings i:nil=\"true\"/><HttpLoggingEnabled>false</HttpLoggingEnabled><Metadata/><NetFrameworkVersion>v4.0</NetFrameworkVersion><NumberOfWorkers>1</NumberOfWorkers><PhpVersion>5.3</PhpVersion><PublishingPassword>zisyPxic2kssHBY0uSbxu55MAwDdvuCnabcxq2P7cbwjbeXk8xfcZRox31lS</PublishingPassword><PublishingUsername>$clitsts1</PublishingUsername><RequestTracingEnabled>false</RequestTracingEnabled><RequestTracingExpirationTime i:nil=\"true\"/><ScmType>None</ScmType><Use32BitWorkerProcess>true</Use32BitWorkerProcess><WebSocketsEnabled>false</WebSocketsEnabled></SiteConfig>", { 'cache-control': 'private',
  'content-length': '1214',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.68 (rd_rdfe_stable.130710-0833) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'a632cf625a0046429c55cd81e7002a76',
  date: 'Thu, 25 Jul 2013 13:39:46 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/eastuswebspace/sites/clitsts1/config')
  .reply(200, "<SiteConfig xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AppSettings/><ConnectionStrings/><DefaultDocuments xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>Default.htm</a:string><a:string>Default.html</a:string><a:string>Default.asp</a:string><a:string>index.htm</a:string><a:string>index.html</a:string><a:string>iisstart.htm</a:string><a:string>default.aspx</a:string><a:string>index.php</a:string><a:string>hostingstart.html</a:string></DefaultDocuments><DetailedErrorLoggingEnabled>false</DetailedErrorLoggingEnabled><DocumentRoot i:nil=\"true\"/><HandlerMappings i:nil=\"true\"/><HttpLoggingEnabled>false</HttpLoggingEnabled><Metadata/><NetFrameworkVersion>v4.0</NetFrameworkVersion><NumberOfWorkers>1</NumberOfWorkers><PhpVersion>5.3</PhpVersion><PublishingPassword>zisyPxic2kssHBY0uSbxu55MAwDdvuCnabcxq2P7cbwjbeXk8xfcZRox31lS</PublishingPassword><PublishingUsername>$clitsts1</PublishingUsername><RequestTracingEnabled>false</RequestTracingEnabled><RequestTracingExpirationTime i:nil=\"true\"/><ScmType>None</ScmType><Use32BitWorkerProcess>true</Use32BitWorkerProcess><WebSocketsEnabled>false</WebSocketsEnabled></SiteConfig>", { 'cache-control': 'private',
  'content-length': '1214',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.68 (rd_rdfe_stable.130710-0833) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '1d5a75fd46b24388adf0f01c2f5e4acf',
  date: 'Thu, 25 Jul 2013 13:39:48 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/eastuswebspace/sites/clitsts1/config', '*')
  .reply(200, "", { 'cache-control': 'private',
  'transfer-encoding': 'chunked',
  server: '33.0.6198.68 (rd_rdfe_stable.130710-0833) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'cab289f28672428eb4507126e20e2640',
  date: 'Thu, 25 Jul 2013 13:39:52 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/eastuswebspace/sites/clitsts1/config')
  .reply(200, "<SiteConfig xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AppSettings/><ConnectionStrings/><DefaultDocuments xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>Default.htm</a:string><a:string>Default.html</a:string><a:string>Default.asp</a:string><a:string>index.htm</a:string><a:string>index.html</a:string><a:string>iisstart.htm</a:string><a:string>default.aspx</a:string><a:string>index.php</a:string><a:string>hostingstart.html</a:string></DefaultDocuments><DetailedErrorLoggingEnabled>false</DetailedErrorLoggingEnabled><DocumentRoot i:nil=\"true\"/><HandlerMappings><HandlerMapping><Arguments i:nil=\"true\"/><Extension>.js</Extension><ScriptProcessor>c:</ScriptProcessor></HandlerMapping></HandlerMappings><HttpLoggingEnabled>false</HttpLoggingEnabled><Metadata/><NetFrameworkVersion>v4.0</NetFrameworkVersion><NumberOfWorkers>1</NumberOfWorkers><PhpVersion>5.3</PhpVersion><PublishingPassword>zisyPxic2kssHBY0uSbxu55MAwDdvuCnabcxq2P7cbwjbeXk8xfcZRox31lS</PublishingPassword><PublishingUsername>$clitsts1</PublishingUsername><RequestTracingEnabled>false</RequestTracingEnabled><RequestTracingExpirationTime i:nil=\"true\"/><ScmType>None</ScmType><Use32BitWorkerProcess>true</Use32BitWorkerProcess><WebSocketsEnabled>false</WebSocketsEnabled></SiteConfig>", { 'cache-control': 'private',
  'content-length': '1339',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.68 (rd_rdfe_stable.130710-0833) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '322279e89a594a34ae7be2bb9c4c4c99',
  date: 'Thu, 25 Jul 2013 13:39:55 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/eastuswebspace/sites/clitsts1/config')
  .reply(200, "<SiteConfig xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AppSettings/><ConnectionStrings/><DefaultDocuments xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>Default.htm</a:string><a:string>Default.html</a:string><a:string>Default.asp</a:string><a:string>index.htm</a:string><a:string>index.html</a:string><a:string>iisstart.htm</a:string><a:string>default.aspx</a:string><a:string>index.php</a:string><a:string>hostingstart.html</a:string></DefaultDocuments><DetailedErrorLoggingEnabled>false</DetailedErrorLoggingEnabled><DocumentRoot i:nil=\"true\"/><HandlerMappings><HandlerMapping><Arguments i:nil=\"true\"/><Extension>.js</Extension><ScriptProcessor>c:</ScriptProcessor></HandlerMapping></HandlerMappings><HttpLoggingEnabled>false</HttpLoggingEnabled><Metadata/><NetFrameworkVersion>v4.0</NetFrameworkVersion><NumberOfWorkers>1</NumberOfWorkers><PhpVersion>5.3</PhpVersion><PublishingPassword>zisyPxic2kssHBY0uSbxu55MAwDdvuCnabcxq2P7cbwjbeXk8xfcZRox31lS</PublishingPassword><PublishingUsername>$clitsts1</PublishingUsername><RequestTracingEnabled>false</RequestTracingEnabled><RequestTracingExpirationTime i:nil=\"true\"/><ScmType>None</ScmType><Use32BitWorkerProcess>true</Use32BitWorkerProcess><WebSocketsEnabled>false</WebSocketsEnabled></SiteConfig>", { 'cache-control': 'private',
  'content-length': '1339',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.68 (rd_rdfe_stable.130710-0833) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '030503277aa640db9b38b43515349541',
  date: 'Thu, 25 Jul 2013 13:39:57 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/eastuswebspace/sites/clitsts1/config', '*')
  .reply(200, "", { 'cache-control': 'private',
  'transfer-encoding': 'chunked',
  server: '33.0.6198.68 (rd_rdfe_stable.130710-0833) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'd8a90e92b0994acf865ffa49629456fb',
  date: 'Thu, 25 Jul 2013 13:40:01 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/eastuswebspace/sites/clitsts1/config')
  .reply(200, "<SiteConfig xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AppSettings/><ConnectionStrings/><DefaultDocuments xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>Default.htm</a:string><a:string>Default.html</a:string><a:string>Default.asp</a:string><a:string>index.htm</a:string><a:string>index.html</a:string><a:string>iisstart.htm</a:string><a:string>default.aspx</a:string><a:string>index.php</a:string><a:string>hostingstart.html</a:string></DefaultDocuments><DetailedErrorLoggingEnabled>false</DetailedErrorLoggingEnabled><DocumentRoot i:nil=\"true\"/><HandlerMappings i:nil=\"true\"/><HttpLoggingEnabled>false</HttpLoggingEnabled><Metadata/><NetFrameworkVersion>v4.0</NetFrameworkVersion><NumberOfWorkers>1</NumberOfWorkers><PhpVersion>5.3</PhpVersion><PublishingPassword>zisyPxic2kssHBY0uSbxu55MAwDdvuCnabcxq2P7cbwjbeXk8xfcZRox31lS</PublishingPassword><PublishingUsername>$clitsts1</PublishingUsername><RequestTracingEnabled>false</RequestTracingEnabled><RequestTracingExpirationTime i:nil=\"true\"/><ScmType>None</ScmType><Use32BitWorkerProcess>true</Use32BitWorkerProcess><WebSocketsEnabled>false</WebSocketsEnabled></SiteConfig>", { 'cache-control': 'private',
  'content-length': '1214',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.68 (rd_rdfe_stable.130710-0833) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '65d745ed90c94f7ab146093331a9e9f4',
  date: 'Thu, 25 Jul 2013 13:40:04 GMT' });
 return result; }]];