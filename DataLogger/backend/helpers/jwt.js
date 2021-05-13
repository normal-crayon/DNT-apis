const expjwt = require('express-jwt')
const secret = require('../secrets.json')
const jwt = () =>{
    return expjwt({ secret, algorithms: ['HS256']}).unless({
        path: [
            // declare public routes here, which does not need auth
            '/users/auth'
        ]
    });
}

module.exports = jwt