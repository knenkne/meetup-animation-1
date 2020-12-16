import i18next from 'i18next'

export const getErrorPayload = (error = {}, isUFS) => {
    if (isUFS) {
        return {
            ...error,
            title: error.title || i18next.t('lib.workflow:data.submission.error'),
            text: error.text || i18next.t('lib.workflow:we.already.know.try.to.repeat.in.5.minutes'),
        }
    }

    return {
        ...error,
        title: error.title || i18next.t('lib.workflow:unexpected.error.happened'),
        text: error.text || i18next.t('lib.workflow:try.to.enter.later'),
    }
}
