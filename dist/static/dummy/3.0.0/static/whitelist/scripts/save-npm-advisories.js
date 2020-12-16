const fs = require('fs')
const path = require('path')

const rq = require('request-promise')

const API = 'https://www.npmjs.com/advisories'
const PER_PAGE = '100000'
const pathToNpmAdvisories = path.resolve('lists', 'support', 'npm-advisories.json')

const INDENTATION = 2

rq({
    uri: `${API}?perPage=${PER_PAGE}`,
    headers: {
        // Заголовок, позволяющий получить json вместо html
        'x-spiferack': 1
    }
})
    .then((response) => {
        const advisories = JSON.parse(response).advisoriesData.objects

        fs.writeFileSync(pathToNpmAdvisories, JSON.stringify(advisories, null, INDENTATION), 'utf8')
    })
    .catch(console.error)
