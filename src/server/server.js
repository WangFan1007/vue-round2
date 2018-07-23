var express = require('express')
// var birds = require('./birds')
var cms = require('./cms')
var app = express()
var path = require('path')

// app.get('/', (req,res) => {
//     res.send('Hello world 你好!')
// })
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")
    next()
})

app.use(cms)

app.use(express.static(path.join(__dirname, 'public')))



var server = app.listen(4000, ()=>{
    var host = server.address().address
    var port = server.address().port
})

