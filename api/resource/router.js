const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req, res, next) => {
    Resource.getAll()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    console.log('post')
})

module.exports = router
