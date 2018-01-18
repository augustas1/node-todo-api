const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const id = '5a604b66b96f0e286cc17b4311';
//
// if (!ObjectID.isValid()) {
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then(todos => {
//     console.log('Todos', todos);
// });

// Todo.findById(id).then(todo => {
//     if (!todo) {
//         console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch(e => {
//     console.log(e);
// });

User.findById('5a5e30bf50455607f06701cc').then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }

    return console.log(JSON.stringify(user, undefined, 4));
}).catch(e => console.log(e));