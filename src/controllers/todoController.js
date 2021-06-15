const getModelByName = require('../db/getModelByName');


module.exports.create = function (req, res) {
  if (!req.body.todo) return res.status(200).send({ success: false, error: "todo info not found" });

  const Todo = getModelByName('todo');

  try {
    Todo.create(req.body.todo, req.user)
      .then((todo) => {
        res.status(200).send({ success: true, data: { todo } });
      }).catch(error => res.status(200).send({ success: false, error: error.message }));
  } catch(error) {
    res.status(500).send({ success: false, error: error.message })
  }
}

module.exports.getTodos = function (req, res) {
  const Todo = getModelByName('todo');

  Todo.getAll(req.user)
    .then((todos) => {
      res.status(200).send({ success: true, data: { todos } });
    }).catch(error => res.status(200).send({ success: false, error: error.message }));
}

module.exports.getTodo = function (req, res) {
  const Todo = getModelByName('todo');

  Todo.getOne(req.params.id, req.user)
    .then((todo) => {
      res.status(200).send({ success: true, data: { todo } });
    }).catch(error => res.status(200).send({ success: false, error: error.message }));
}

module.exports.updateTodo = function (req, res) {
  const Todo = getModelByName('todo');

  Todo.updateTodo(req.params.id, req.body.todo, req.user)
    .then((todo) => {
      res.status(200).send({ success: true, data: { todo } });
    }).catch(error => res.status(200).send({ success: false, error: error.message }));
}

module.exports.deleteTodo = function (req, res) {
  const Todo = getModelByName('todo');

  Todo.deleteTodo(req.params.id, req.user)
    .then((todo) => {
      console.log('todo removed - ', todo);
      res.status(200).send({ success: true, message: 'todo removed successfully' });
    }).catch(error => res.status(200).send({ success: false, error: error.message }));
}