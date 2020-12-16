const path = require('path')

const router = require('express').Router()

const content = require('./content')

module.exports = router
    .get('/blocks-old.png', (req, res) => {
        res.sendFile(path.resolve(__dirname, './blocks-old.png'))
    })
    .get('/blocks.png', (req, res) => {
        res.sendFile(path.resolve(__dirname, './blocks.png'))
    })
    .get('/blocks-big.png', (req, res) => {
        res.sendFile(path.resolve(__dirname, './blocks-big.png'))
    })
    .get('/blocks-small.png', (req, res) => {
        res.sendFile(path.resolve(__dirname, './blocks-small.png'))
    })
    .get('/content-broker/init', (req, res) => {
        setTimeout(() => {
            res.send({ statusCode: '0' })
        }, 1000)
    })
    .post('/content-broker/content', (req, res) => {
        setTimeout(() => {
            const ownContent = JSON.parse(JSON.stringify(content))

            ownContent.places.forEach((place) => {
                place.items.forEach((item, i) => {
                    if (item.preview.image) {
                        item.preview.image.url = req.originalUrl
                            .replace('/content-broker/content', i % 2 ? '/blocks.png' : '/blocks-big.png')
                    }
                })
            })
            res.send(ownContent)
        }, 1000)
    })
    .post('/content-broker/content/feedbacks', (req, res) => {
        console.log('Пришли данные по откликам')
        console.table(req.body.feedbacks)
        res.send({ status: 0 })
    })
