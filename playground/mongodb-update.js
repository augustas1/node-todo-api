// const MongoClient = require('mongodb').MongoClient;
    const {MongoClient, ObjectID} = require('mongodb');

    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
        if (err) {
            return console.log('Unable to connect to MongoDB server');
        }

        console.log('Connected to MongoDB server');
        const db = client.db('TodoApp');

        db.collection('Users').updateMany({
            name: 'Augustas'
        }, {
            $inc: {
                age: 2
            }
        }, {
            returnOriginal: false
        }).then(res => {
            console.log(res);
        })

    // client.close();
});