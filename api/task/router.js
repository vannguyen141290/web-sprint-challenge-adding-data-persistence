const router = require('express').Router()
const Task = require('./model')
const { checkPayload, checkProjectId } = require('./middleware')

router.get('/', (req, res, next) => {
    Task.getAll()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(next)
})

router.post('/', checkPayload, checkProjectId, (req, res, next) => {
    Task.create(req.body)
        .then(newTask => {
            res.status(201).json(newTask)
        })
        .catch(next)
})

module.exports = router
