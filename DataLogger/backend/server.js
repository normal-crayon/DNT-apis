const router = require('express');
const app = router();
const { json } = require('body-parser');
const bodyParser = require('body-parser');
const mongo = require('mongoose');


const testRoutes = require('./Routes/testRoutes');
const jwt = require('./helpers/jwt');
const authRoutes = require('./Routes/auth.route');
const Secrets = require('./secrets.json');

app.use(bodyParser.json())

//cors enabled for development, remove during deployment
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(jwt())
app.use(authRoutes)
app.use(testRoutes);

mongo.connect(Secrets.mongo, {useNewUrlParser:true, useUnifiedTopology: true})
.then(message => {
  console.log("Database connected");
  app.listen(3030);
})

.catch(err =>{
  console.log(err);
})
