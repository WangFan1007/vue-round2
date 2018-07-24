var express = require('express')
var router = express.Router()
const request = require('superagent')

var fs = require('fs')
var path = require('path')
var filePath = path.resolve(__dirname,'./public/lunbo')



router.get('/getlunbo', (req,res) => {
    var resfiles = []
    resfiles = fs.readdirSync(filePath).map((fileName)=>{
        return `http://${req.hostname}:4000/lunbo/${fileName}`
    })
    var result = {
        status:0,
        body:resfiles
    }
    res.json(result)  
})

router.get('/newslist',(req,res) => {
    var news = []
    var newsApi = 'http://api01.bitspaceman.com:8000/news/qihoo'
    request.get(newsApi)
    .query({ 
        apikey: '3PbN7pgnGkKdXLSM1sT3V3vaN63m1otQaIKjYieiHdtaSYuQmwCoAMPaRKWjX3uO',
        kw: '动态'
     })
    .end((err,resin)=>{
        res.json(resin.body)
    })
})

router.get('/newsinfo',(req,res)=>{

})

module.exports = router