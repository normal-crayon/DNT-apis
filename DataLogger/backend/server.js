const router = require('express')
const app = router()
const { json } = require('body-parser')
const bodyParser = require('body-parser')
const testRoutes = require('./Routes/testRoutes')
app.use(bodyParser.json())

//cors enabled for development, remove during deployment
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(testRoutes);
app.listen(3030, ()=>{
    console.log('listening at http://localhost:3030')
})
