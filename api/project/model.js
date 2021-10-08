const db = require('../../data/dbConfig')

const getAll = () => {
    return db('projects')
}

const create = async project => {
    const id = await db('projects')
        .insert(project)
    return db('projects')
        .select('projects.*')
        .where('project_id', id)
        .first()
}

module.exports = {
    getAll,
    create
}
