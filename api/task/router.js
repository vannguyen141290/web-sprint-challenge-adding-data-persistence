const router = require('express').Router()
const Task = require('./model')

router.get('/', (req, res, next) => {
    Task.getAll()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    console.log('post')
})

module.exports = router
