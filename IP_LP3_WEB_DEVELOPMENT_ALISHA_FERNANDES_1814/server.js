const http = require ('http')
const fs = require('fs')
const port = 3000

function getDate()
{
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    return dateTime;
}
   

const server = http.createServer(function(req,res){
    res.writeHead(200, { 'content-Type' :'text/html','Access-Control-Allow-Origin': '*' })
    res.write(getDate());
    res.end();
})

server.listen(port,function(error){
    if(error){
        console.log('something went wrong', error)
    }else{
        console.log('server is listening on port' + port)
    }
})