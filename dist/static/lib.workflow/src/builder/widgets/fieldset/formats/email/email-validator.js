import i18next from 'i18next'

export const emailValidator = (value) => !value || /^\S+@\S+$/.test(value)
    ? ''
    : i18next.t('lib.workflow:email.validation.message')
