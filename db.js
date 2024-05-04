const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv')
dotenv.config()

const url = 'mongodb+srv://latest1:test123@cluster0.4qqhdjp.mongodb.net/'

MongoClient.connect(url, (err, client) => {
    if (err) throw err

    console.log("db connected...")
    module.exports = client

    const app = require('./app')
    app.listen(8000, () => {
        console.log("server listening on 8000...")
    })
})