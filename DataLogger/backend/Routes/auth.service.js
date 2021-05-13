const jwt = require('jsonwebtoken')
const secrets = require('../secrets.json')
const secret_text = secrets.secrets
const users = [{id: 1, username: 'admin', password: 'admin', firstName: 'john', lastName: 'doe'}]
const auth = async({username, password}) => {
    const user = users.find(u => u.username === username && u.password === password)
    if(!user) throw 'Username / password incorrect, Try again';

    //token expires in 5 days
    const token = jwt.sign({ sub: user.id}, secret_text, {expiresIn: '5d'})
    return {
       token,
       ...getUsers
    };
}
const getUsers = (user) =>{
    const {password, ...users} = user;
    return users
}
const getAll = async() =>{
    return users.map(u => getUsers(u))
}

module.exports = {
    auth,
    getAll
};