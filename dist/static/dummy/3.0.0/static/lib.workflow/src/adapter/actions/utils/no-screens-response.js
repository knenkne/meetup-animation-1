import _ from 'lodash'

const screensPath = 'body.output.screens'
const emptyScreensArray = []

export const noScreensResponse = (response) =>
    _(response)
        .omit(screensPath)
        .set(screensPath, emptyScreensArray)
        .value()
