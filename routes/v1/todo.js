const todo = require('../../actions/todo.action');
// const config = require('./config');

const todoController = {
  getAllTodo: async (req, res) => {
    try {
      const todoList = await todo.getAllTodo(req.query.id);
      const response = {
        todoList
      };
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({error})
    }
  },
  createTodo: async (req, res) => {
    try {
      const data = await todo.createTodo(req.body.content);
      const response = {
        data
      }
      return res.status(200).json({response})
    } catch (error) {
      return res.status(500).json({error})
    }
  }
}

module.exports = (router) => {
  router.get('/', todoController.getAllTodo);
  router.post('/', todoController.createTodo);
}