let history = {}

export const setHistory = (nextHistory = {}) => {
    history = nextHistory
}
export const getHistory = () => history
