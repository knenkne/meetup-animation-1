export const isCleanInterface = () =>
    window.location.search
    && window.location.search.includes('cleanInterface=true')

export const isDemoInterface = () => !isCleanInterface()
