const request = require('request-promise');
const requestLib = require('../libs/request');
const config = require('../config');
const HOST_USERMGT = config.get('USER_MGT')
const requestUser = new requestLib(HOST_USERMGT)

const register = async (username, password, token) => {
  try {
    const options = {
      url: '/v1/user/register',
      body: {
        username,
        password,
      },
      headers: {
        token
      }
    };
    const result = requestUser.post(options);
    return result;
  } catch (error) {
    throw error
  }
};

const login = async (username, password, token) => {
  try {
    const options = {
      url: '/v1/user/login',
      body: {
        username,
        password,
      },
      headers: {
        token
      }
    };
    const result = requestUser.post(options);
    return result;
  } catch (error) {
    throw error
  }
}

module.exports = {
  register,
  login
}