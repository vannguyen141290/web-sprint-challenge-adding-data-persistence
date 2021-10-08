const router = require('express').Router()

// [{"resource_id":1,"resource_name":"foo","resource_description":null}]`

router.get('/', (req, res, next) => {
    console.log('get')
})

router.post('/', (req, res, next) => {
    console.log('post')
})

module.exports = router
