const db = require('../../data/dbConfig')

const getAll = async () => {
    const projects = await db('projects')
    const result = projects.map(proj => {
        if (proj.project_completed === 0) {
            return ({
                ...proj,
                project_completed: false
            })
        } else {
            return ({
                ...proj,
                project_completed: true
            })
        }
    })
    return result
}

// const create = async project => {
//     await db('projects')
//         .insert(project)
//     const result = await getAll()
//     return result
// }

const create = async project => {
    const id = await db('projects')
        .insert(project)
    const result = await db('projects')
        .select('projects.*')
        .where('project_id', id)
        .first()
    return ({
        ...result,
        project_completed: result.project_completed === 0 ? false : true
    })
}

module.exports = {
    getAll,
    create
}
