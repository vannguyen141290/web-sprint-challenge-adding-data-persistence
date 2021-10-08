const db = require('../../data/dbConfig')

const getAll = () => {
    return db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')
}

const create = async task => {
    const id = await db('tasks')
        .insert(task)
    return db('tasks')
        .where('task_id', id)
}

module.exports = {
    getAll,
    create
}
