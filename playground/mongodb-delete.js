// const MongoClient = require('mongodb').MongoClient;
    const {MongoClient, ObjectID} = require('mongodb');

    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
        if (err) {
            return console.log('Unable to connect to MongoDB server');
        }

        console.log('Connected to MongoDB server');
        const db = client.db('TodoApp');

        // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(res => {
        //     console.log(res);
        // });

        // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(res => {
        //     console.log(res);
        // });

        // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then(res => {
        //     console.log(res);
        // });

    // client.close();
});