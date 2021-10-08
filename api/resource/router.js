const router = require('express').Router()
const Resource = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.getAll()
        res.status(200).json(resources)
    } catch (err) { next(err) }

})

router.post('/', (req, res, next) => {
    console.log('post')
})

module.exports = router
