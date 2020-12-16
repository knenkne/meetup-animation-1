module.exports = (pathToProject) => {
    if (pathToProject === '/one') {
        return {
            'foo@1.0.0': [
                [
                    'bar@1.0.0',
                    'buz@1.0.0',
                    'foo@1.0.0'
                ]
            ]
        }
    }

    return {
        'foo@1.0.0': [
            [
                'bar@1.0.0',
                'buz@1.0.0',
                'foo@1.0.0'
            ],
            [
                'qux@1.0.0',
                'quux@1.0.0',
                'foo@1.0.0'
            ]
        ]
    }
}
