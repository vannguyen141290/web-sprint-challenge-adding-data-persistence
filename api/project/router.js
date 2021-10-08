const router = require('express').Router()

router.get('/', (req, res, next) => {
    console.log('get')
})

router.post('/', (req, res, next) => {
    console.log('post')
})


module.exports = router
