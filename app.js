var express = require('express')
var path = require('path')
var router = require('./router/router')

var bodyParser = require('body-parser')

var mongoose = require('mongoose')


var app = express()

app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/'))

app.use(bodyParser.urlencoded({extended: true}))

app.use(router);


mongoose.connect("mongodb://127.0.0.1:27017/admin",{ useNewUrlParser: true })
mongoose.connection.on('connected',function(){
    console.log('mongoose 监听连接成功')
    app.listen(80,function(){
        console.log('running at port: 80')
    })
})

// app.listen(80, function(){
//     console.log('running at port: 80')
// })