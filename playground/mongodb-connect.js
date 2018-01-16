// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    const db = client.db('TodoApp');

    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(res.ops, undefined, 4));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Augustas',
    //     age: 22,
    //     locations: 'Vilnius'
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //
    //     console.log(res.ops[0]._id.getTimestamp());
    // });

    client.close();
});