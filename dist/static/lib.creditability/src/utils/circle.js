const TWO = 2
const HUNDRED = 100

export const getCoordsByPercents = (inner, outer, percentages, offset = void 0) => {
    const move = offset ? (inner - offset) / outer : 1
    const angle = TWO * Math.PI * percentages / HUNDRED
    const x = outer + (Math.sin(angle) * inner * move)
    const y = outer - (Math.cos(angle) * inner * move)

    return [x, y]
}
