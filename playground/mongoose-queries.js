const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '';

// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id 
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id 
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By ID', JSON.stringify(todo, undefined, 2));
// }).catch((e) => console.log(e));

User.findById('5bd0824648cc1b650b95e06b').then((user) => {
  if(!user) {
    return console.log('Id not found');
  }
  console.log('User by ID: ', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));