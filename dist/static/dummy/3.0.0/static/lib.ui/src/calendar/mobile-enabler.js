let mobileEnabled = false

export const enableMobile = () => {
    mobileEnabled = true
}

// eslint-disable-next-line no-warning-comments, comment: not forget
// TODO: test purpose only
export const isMobileEnabled = () => mobileEnabled
