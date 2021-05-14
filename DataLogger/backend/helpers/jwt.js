const expjwt = require('express-jwt')
const config = require('../secrets.json')
// const jwt = require('jsonwebtoken')

const jwt = () =>{
    const { secret } = config
    return expjwt({ secret : config.secrets, algorithms: ['HS256']}).unless({
        path: [
            // declare public routes here, which does not need auth
            '/users/auth',
        ]
    });
}

module.exports = jwt