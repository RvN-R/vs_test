const http = require('http')
const { off } = require('process')
const port = 5500

const server = http.createServer(function(req, res){
    Response.write('Hello Node')
    res.end()
})

server.listen(port, function(error){
    if(error){
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})

