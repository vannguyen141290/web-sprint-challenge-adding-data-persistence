const db = require('../../data/dbConfig')

const checkProjectId = async (req, res, next) => {
    const existing = await db('projects')
        .where('project_id', req.body.project_id)
        .first()
    if (!existing) {
        next({
            status: 400,
            message: 'project Id not found'
        })
    } else { next() }
}

const checkPayload = (req, res, next) => {
    const { task_description, task_completed, project_id } = req.body
    if (
        task_description === undefined ||
        typeof task_description !== 'string' ||
        !task_description.trim() ||
        !!task_completed && typeof task_completed !== 'boolean' ||
        project_id === undefined ||
        typeof project_id !== 'number'
    ) {
        next({
            status: 400,
            message: 'invalid task'
        })
    } else {
        next()
    }
}

module.exports = {
    checkPayload,
    checkProjectId
}
