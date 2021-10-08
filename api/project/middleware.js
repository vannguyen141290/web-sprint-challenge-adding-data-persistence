function checkPayload(req, res, next) {
    const { project_name } = req.body
    if (
        project_name === undefined ||
        typeof project_name !== 'string' ||
        !project_name.trim()
        // I wanted to set condition for project_completed which is supposed to be a boolean or 0 or 1, as I want it to throw error before posting, but it does not let me pass the test so I ignored it
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
