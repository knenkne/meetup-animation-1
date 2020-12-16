const prefixRegExp = /\D*/
const numberRegExp = /([\d•]{3})*?([\d•]{2})([\d•]{2})$/
const dashStartRegExp = /^-/

// deprecated
export function formatPhoneNumber (phone) {
    if (!phone || !phone.prefix || !phone.code || !phone.number) {
        return ''
    }

    const prefix = phone.prefix
        .replace(prefixRegExp, '')
    const number = phone.number
        .replace(numberRegExp, '$1-$2-$3')
        .replace(dashStartRegExp, '')
        .replace(/•-/g, '• ')

    return `+${prefix} (${phone.code}) ${number}`
}
