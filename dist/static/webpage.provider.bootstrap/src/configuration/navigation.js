let navigation = {}

export const setNavigation = (nextNavigation = {}) => {
    navigation = nextNavigation
}
export const getNavigation = () => navigation
