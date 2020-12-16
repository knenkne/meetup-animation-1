export const groupBlocks = (offers) =>
    offers.reduce((memo, offer, index) => {
        const positionInBlock = index % 5
        const blockPosition = Math.floor(index / 5) * 2
        const rowPosition = positionInBlock < 2 ? blockPosition : blockPosition + 1

        if (!memo[rowPosition]) {
            memo[rowPosition] = []
        }

        memo[rowPosition].push(offer)

        return memo
    }, [])
