const db = require('../../data/dbConfig')

const getAll = async () => {
    let tasks = await db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select(
            't.task_id',
            't.task_description',
            't.task_notes',
            't.task_completed',
            'p.project_name',
            'p.project_description'
        )
    const result = tasks.map(task => {
        if (task.task_completed === 0) {
            return ({
                ...task,
                task_completed: false
            })
        } else {
            return ({
                ...task, task_completed: true
            })
        }
    })
    return result
}

const create = async task => {
    const id = await db('tasks')
        .insert(task)
    const newTask = await db('tasks')
        .select('task_description', 'task_completed', 'task_notes')
        .where('task_id', id)
        .first()
    return ({
        task_description: newTask.task_description,
        task_completed: newTask.task_completed === 0 ? false : true,
        task_notes: newTask.task_notes
    })
}

module.exports = {
    getAll,
    create
}
