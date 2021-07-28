const express = require('express');
const app = express()
// var cors = require('cors')
var apis = require('./dynamo');


var bodyParser = require('body-parser')


var router = express.Router()


// listen for requrests


var port = process.env.PORT || 3003
app.listen(port)
console.log('Oder API is running at ' + port)
// app.use(cors)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


// routes

app.use((req,res,next) => {
    //res.header('Access-Control-Allow-Origin', '*');
    console.log('new request made on : ',req.path)
    next()
})
app.use('/',router)

router.route('/hello').get((req,res)=> {
    res.send("Hello !")
})



router.route('/Leaders').get((req,res)=> {
    //console.log(res)
    apis.getLeader().then(result =>{
        res.send(result) })
        .catch(err=>res.send(err))

})




app.use((req,res)=> {
    res.write('404! not found')
    res.end()
})
