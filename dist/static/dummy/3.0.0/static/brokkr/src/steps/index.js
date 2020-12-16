require('./cucumber-setup')

module.exports = {
    abstractActions: require('./abstract/actions'),
    abstractChecks: require('./abstract/checks'),
    businessSteps: require('./business')
}
