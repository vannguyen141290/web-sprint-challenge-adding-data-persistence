const db = require('../../data/dbConfig')

// [{"resource_id":1,"resource_name":"foo","resource_description":null}]`

const getAll = () => {
    return db('resources')
}


module.exports = {
    getAll
}
