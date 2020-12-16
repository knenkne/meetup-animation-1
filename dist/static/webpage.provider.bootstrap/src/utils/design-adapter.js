export const designAdapter = (launcher) => {
    Object.keys(launcher || {}).forEach((key) => {
        if (launcher[`${key}.3`]) {
            launcher[key] = launcher[`${key}.3`]
        }
    })
}
