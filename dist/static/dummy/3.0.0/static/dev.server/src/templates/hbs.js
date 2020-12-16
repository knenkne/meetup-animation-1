const getPackageVersion = require('../utils/get-package-version')

module.exports = {
    resourcesUrl: '/static',
    assetsCommonVersion: getPackageVersion('common'),
    commonVersion: getPackageVersion('common'),
    bootstrapVersion: getPackageVersion('webpage.provider.bootstrap'),
    antifraudStaticRoot: '/eribStatic',
    versionNumber: 'VersionNumber: 20.0.0',
    buildNumber: 'BuildNumber: 500',
    commitHash: 'CommitHash: gds76fsa2',
}
