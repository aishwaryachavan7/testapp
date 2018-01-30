exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['login.js','base.js'],
  capabilities: {
    browserName: 'firefox'
  }
}
