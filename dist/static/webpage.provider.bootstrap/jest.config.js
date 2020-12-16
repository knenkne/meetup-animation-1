module.exports = {
    collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
        '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}'
    ],
    testURL: 'http://localhost',
    transform: {
        '^.+\\.(js|jsx|mjs)$': 'babel-jest'
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
    moduleFileExtensions: ['js'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(css)$': '<rootDir>/__mocks__/styleMock.js'
    }
}
