const {todo} = require('../db/models/postgresql');

const createTodo = async (content) => {
  try {
    const result = await todo.create({
      content
    })
    return result
  } catch (error) {
    throw error
  }
}

const getAllTodo = async (id) => {
  try {
    let query = {}
    if (id) query = {where: {id}}
    const result = await todo.findAll(query)
    return result
  } catch (error) {
    throw error
  }
}

module.exports = {
  createTodo,
  getAllTodo
}