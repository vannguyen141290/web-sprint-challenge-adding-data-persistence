const router = require('express').Router()
const Resource = require('./model')
const { checkPayload } = require('./middleware')

router.get('/', (req, res, next) => {
    Resource.getAll()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(next)
})

router.post('/', checkPayload, (req, res, next) => {
    Resource.create(req.body)
        .then(newResource => {
            res.status(201).json(newResource)
        })
        .catch(next)
})

module.exports = router
