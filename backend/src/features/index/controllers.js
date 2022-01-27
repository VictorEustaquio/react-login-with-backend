const Boom = require('boom')
const Validator = require('fastest-validator')

const services = require('./services')

const v = new Validator()

module.exports = {
    index: async ctx => {
        const { request: { body }, response } = ctx
            response.status = 200;
            response.body=`<h3>🚀 Backend Server is running!</h3>`;
    }
}