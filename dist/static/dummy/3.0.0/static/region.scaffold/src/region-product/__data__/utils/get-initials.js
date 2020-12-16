export const getInitials = (string) => {
    if (!string) {
        return null
    }
    const names = string.split(' ')
    let initials = names[0].substring(0, 1)

    if (names.length > 1) {
        initials += names[1].substring(0, 1)
    }
    return initials
}
