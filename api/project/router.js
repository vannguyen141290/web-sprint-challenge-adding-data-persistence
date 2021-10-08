const router = require('express').Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
    Project.getAll()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    console.log('post')
})


module.exports = router
