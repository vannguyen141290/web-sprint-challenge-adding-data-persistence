const express = require('express')
const resouceRouter = require('./resource/router')
const projectRouter = require('./project/router')
const taskRouter = require('./task/router')

const server = express()

server.use(express.json())
server.use('/api/resources', resouceRouter)
server.use('/api/projects', projectRouter)
server.use('/api/tasks', taskRouter)

server.get('*', (req, res) => {
    res.send({
        message: `this ${req.originalUrl} endpoint has not been built yet!`
    })
})

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        stack: err.stack,
        message: err.message
    })
})

module.exports = server
