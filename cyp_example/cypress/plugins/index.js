const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const creatBundler = require("@bahmutov/cypress-esbuild-preprocessor");

module.exports = async (on, config) => {
    await addCucumberPreprocessorPlugin(on, config);
    on('file:preprocessor', creatBundler({plugins: [createEsbuildPlugin(config)]}))
    on('before:browser:launch', (browser = {}, launchOptions) => {
        launchOptions.args.push('--disable-extensions');
        return launchOptions;
    })
    return config;
}
