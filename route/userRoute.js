const http = require('http')
const url = require('url')
const { registerUser, updateUser, getUser, getUsers, deleteUser } = require('../service/userService')


var server = http.createServer((req, res) => {
    var Path = url.parse(req.url, true)
    var page = Path.pathname

    if (page === '/') {

        res.end('Home');

    } else if (page === '/Add') {

        let User = {
            firstname: String(Path.query.firstname),
            lastname: String(Path.query.lastname),
            age: Number(Path.query.age),
            gender: String(Path.query.gender),
            email: String(Path.query.email)
        }

        let data = registerUser(User);
        
        data.then((data)=>{
            res.writeHead(200, { contentType: 'text' })
            res.end(JSON.stringify(data))
        });

    } else if (page === '/Remove') {

        let data =deleteUser({ email: Path.query.email });

        data.then((data)=>{
            res.writeHead(200, { contentType: 'text' })
            res.end(JSON.stringify(data))
        });

    } else if (page === '/Update') {

        let data = updateUser({ email: Path.query.email }, { age: Path.query.age });

        data.then((data)=>{
            res.writeHead(200, { contentType: 'text' })
            res.end(JSON.stringify(data))
        });

    } else if (page === '/Read') {

        let data = getUser({ email: Path.query.email});

        data.then((data)=>{
            res.writeHead(200, { contentType: 'text' })
            res.end(JSON.stringify(data))
        })

    } else if (page === '/Reads') {

        let data = getUsers({});

        data.then((data)=>{
            res.writeHead(200, { contentType: 'text' })
            res.end(JSON.stringify(data))
        })

    }
})

module.exports=server;