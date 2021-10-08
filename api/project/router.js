const router = require('express').Router()
const Project = require('./model')
const { checkPayload } = require('./middleware')

router.get('/', (req, res, next) => {
    Project.getAll()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(next)
})

router.post('/', checkPayload, (req, res, next) => {
    Project.create(req.body)
        .then(newP => {
            res.status(201).json(newP)
        })
        .catch(next)
})


module.exports = router
