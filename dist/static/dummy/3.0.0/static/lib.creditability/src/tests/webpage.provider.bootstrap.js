module.exports = {
    getApps: jest.fn(() => {}),
    getAppStartLoader: jest.fn(),
    getAppStopLoader: jest.fn(),
    getBroker: jest.fn(() => ({ publish: jest.fn(() => {}), subscribe: jest.fn(() => {}) })),
    getFeature: jest.fn(() => {}),
    getFeatureOption: jest.fn(() => ''),
    getFeatureValue: jest.fn(() => ''),
    getHistory: jest.fn(() => jest.fn()),
    getInitOptions: jest.fn(() => {}),
    getNotFound: jest.fn(() => {}),
    getOption: jest.fn(() => ''),
    getOptions: jest.fn(() => '')
}
