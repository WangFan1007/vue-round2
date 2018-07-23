var express = require('express')
var router = express.Router()

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

module.exports = router