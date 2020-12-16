export const distance = (query, target, cost = { add: 1, del: 1, change: 1 }) => {
    let queryVar = query
    let targetVar = target
    let n = queryVar.length
    let m = targetVar.length

    if (n > m) {
        const tmp = queryVar

        queryVar = targetVar
        targetVar = tmp
        n = targetVar.length
        m = queryVar.length
    }

    let currentRow = []

    for (let r = 0; r <= n; r++) {
        currentRow.push(r)
    }

    for (let i = 1; i <= m; i++) {
        const previousRow = currentRow
        currentRow = [i]

        for (let z = 0; z < n; z++) {
            currentRow.push(0)
        }

        for (let j = 1; j <= n; j++) {
            const add = previousRow[j] + cost.add
            const del = currentRow[j - 1] + cost.del
            let change = previousRow[j - 1]

            if (queryVar[j - 1] !== targetVar[i - 1]) {
                change += cost.change
            }

            currentRow[j] = Math.min(add, del, change)
        }
    }

    return currentRow[n]
}
