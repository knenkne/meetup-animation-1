module.exports = {
    parser: "babel-eslint",
    extends: "@sbol/eslint-config",
    env: {
        browser: true,
        jest: true
    },
    globals: {
        System: true
    },
    settings: {
        "import/resolver": {
            webpack: {
                config: "./build/webpack.dev.js"
            }
        }
    }
};
