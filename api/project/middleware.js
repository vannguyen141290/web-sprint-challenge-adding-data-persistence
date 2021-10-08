function checkPayload(req, res, next) {
    const { project_name, project_description, project_completed } = req.body
    if (
        project_name === undefined ||
        typeof project_name !== 'string' ||
        !project_name.trim()
    ) {
        next({
            status: 400,
            message: 'invalid project'
        })
    } else {
        next()
    }
}

module.exports = {
    checkPayload
}
