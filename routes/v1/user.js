const { register, login } = require('../../actions/user.action');

const userController = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body;
      const { token } = req.headers;
      const data = await register(username, password, token);
      const result = {
        message: 'register success',
        data,
      }
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const { token } = req.headers;
      const data = await login(username, password, token);
      const result = {
        message: 'login success',
        data,
      }
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = (router) => {
  router.post('/register', userController.register);
  router.post('/login', userController.login);
}