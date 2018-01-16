// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a5e1d3c8ca8a6264826645d')
    // }).toArray().then(docs => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 4));
    // }).catch(err => {
    //     console.log('Unable to fecth docs', err);
    // });

    db.collection('Users').find({name: 'Augustas'}).count().then(count => {
        console.log('Todos count:', count);
    }).catch(err => {
        console.log('Unable to fecth docs', err);
    });

    // client.close();
});