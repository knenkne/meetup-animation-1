import xhr from '../utils/xhr'

export const getEnvironmentPLMiddle = async (plUrl) => xhr(
    `${plUrl}/sbtsbol/api/bootstrap`,
    null,
    { withCredentials: true, requestedWith: true }
)
