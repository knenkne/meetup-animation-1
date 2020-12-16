const VisualRegressionCompare = require('wdio-visual-regression-service/compare')

const getScreenshotName = require('../getters/get-screenshot-name')

module.exports = new VisualRegressionCompare.LocalCompare({
    referenceName: getScreenshotName('reference'),
    screenshotName: getScreenshotName('taken'),
    diffName: getScreenshotName('diff'),
    misMatchTolerance: 0.1
})
