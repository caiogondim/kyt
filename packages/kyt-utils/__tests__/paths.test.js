describe('paths', () => {
  const paths = require('../paths')();

  it('exports the expected properties', () => {
    [
      'userRootPath',
      'srcPath',
      'buildPath',
      'publicBuildPath',
      'publicSrcPath',
      'serverSrcPath',
      'clientSrcPath',
      'clientBuildPath',
      'serverBuildPath',
      'testBuildPath',
      'assetsBuildPath',
      'userKytConfigPath',
      'userNodeModulesPath',
      'userPackageJSONPath',
    ].forEach(p => {
      expect(paths[p]).toBeDefined();
    });
  });
});
