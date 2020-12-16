const DESIGN = '3.0'

export function designVersions (rqConfig) {
    rqConfig.headers['X-Workflow-Options'] = DESIGN

    return rqConfig
}
