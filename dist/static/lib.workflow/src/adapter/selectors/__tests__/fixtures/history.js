const historyAll3Active = [
    {
        id: '25ee2dfa-2913-4535-941b-a03419bfc0c4',
        flow: 'process',
        state: 'third',
        title: 'третий',
        status: 'ACTIVE'
    },
    {
        id: '62e6b9a3-a940-4743-af4b-4db194b44491',
        flow: 'process',
        state: 'second',
        title: 'второй',
        status: 'ACTIVE'
    },
    {
        id: 'e40780e0-b093-4d32-ad56-1307f7564e89',
        flow: 'process',
        state: 'first',
        title: 'первый',
        status: 'ACTIVE'
    }
]

const historyWithDisabled = [
    {
        id: '25ee2dfa-2913-4535-941b-a03419bfc0c4',
        flow: 'process',
        state: 'third',
        title: 'третий',
        status: 'ACTIVE'
    },
    {
        id: '62e6b9a3-a940-4743-af4b-4db194b44491',
        flow: 'process',
        state: 'second',
        title: 'второй',
        status: 'ACTIVE'
    },
    {
        id: 'e40780e0-b093-4d32-ad56-1307f7564e89',
        flow: 'process',
        state: 'first',
        title: 'первый',
        status: 'DISABLED'
    }
]

const historyWithDisabledAndHidden = [
    {
        id: '23423f-2913-4535-941b-3242fsdf3435',
        flow: 'process',
        state: 'sixth',
        title: 'шестой',
        status: 'ACTIVE'
    },
    {
        id: '25ee2dfa-2913-4535-941b-a03419bfc0c4',
        flow: 'process',
        state: 'fifth',
        title: 'пятый',
        status: 'ACTIVE'
    },
    {
        id: '25ee2dfa-2913-4535-941b-a03419bfc0c4',
        flow: 'process',
        state: 'fourth',
        title: 'четвертый',
        status: 'ACTIVE'
    },
    {
        id: '25ee2dfa-2913-4535-941b-a03419bfc0c4',
        flow: 'process',
        state: 'third',
        title: 'третий',
        status: 'DISABLED'
    },
    {
        id: '62e6b9a3-a940-4743-af4b-4db194b44491',
        flow: 'process',
        state: 'second',
        title: 'второй',
        status: 'HIDDEN'
    },
    {
        id: 'e40780e0-b093-4d32-ad56-1307f7564e89',
        flow: 'process',
        state: 'first',
        title: 'первый',
        status: 'HIDDEN'
    }
]

export const history = {
    historyAll3Active,
    historyWithDisabled,
    historyWithDisabledAndHidden
}
