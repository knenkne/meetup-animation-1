const appsInit = {}

export const setInitOptions = (projectName, { messages = {}, features = {}, options = {} } = {}, requested) => {
    if (!appsInit[projectName]) {
        appsInit[projectName] = {
            messages: {},
            features: {},
            options: {}
        }
    }
    Object.assign(appsInit[projectName].messages, messages)
    Object.assign(appsInit[projectName].features, features)
    Object.assign(appsInit[projectName].options, options)

    appsInit[projectName].requested = requested
}
export const getInitOptions = (projectName) => ({
    ...appsInit[projectName] || {}
})
