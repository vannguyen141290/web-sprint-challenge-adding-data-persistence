function checkPayload(req, res, next) {
    const { resource_name } = req.body
    if (
        resource_name === undefined ||
        typeof resource_name !== 'string' ||
        !resource_name.trim()
    ) {
        next({
            status: 400,
            message: 'invalid resource'
        })
    } else {
        next()
    }
}

module.exports = {
    checkPayload
}
