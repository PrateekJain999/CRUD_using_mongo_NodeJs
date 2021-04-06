const mong = require('mongoose')
var http = require('http');

mong.connect('mongodb://127.0.0.1:27017/User', {
    useNewUrlParser: true,
    useCreateIndex: true
})

let startNodeserver = async () => {
    // express startup.
    server = await require('./route/userRoute');

    return new Promise((resolve, reject) => {
        server.listen(4000, (err) => {
            if (err) reject(err);
            resolve();
        });
    });
};

startNodeserver()
    .then(() => {
        console.log('Node server running on 4000');
    }).catch((err) => {
        console.log('Error in starting server', err);
        process.exit(1);
    });