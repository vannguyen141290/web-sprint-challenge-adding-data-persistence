const db = require('../../data/dbConfig')

const getAll = () => {
    return db('projects')
}

// - [ ] `[GET] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//     - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`

module.exports = {
    getAll
}
