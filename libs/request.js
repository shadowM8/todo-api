const request = require('request-promise');
const _ = require('lodash');

class RequestLib {
  constructor(host) {
    this.host = host;
  }

  async get(option, logData = {}) {
    try {
      const headers = {
        ...option.headers,
        'Content-Type': _.result(option, 'headers.contentType', 'application/json'),
        Authorization: _.result(option, 'headers.authorization'),
        'request-id': _.result(logData, 'requestId'),
      };

      const options = {
        ...option,
        method: 'GET',
        url: `${this.host}${option.url}`,
        headers,
        json: true,
      };

      const result = await request(options);

      return result;
    } catch (err) {
      throw err;
    }
  }

  async post(option, logData = {}) {
    try {
      const headers = {
        ...option.headers,
        'Content-Type': _.result(option, 'headers.contentType', 'application/json'),
        // Authorization: _.result(option, 'headers.authorization'),
        token: _.result(option, 'headers.token'),
        'request-id': _.result(logData, 'requestId'),
      };

      const options = {
        ...option,
        method: 'POST',
        url: `${this.host}${option.url}`,
        headers,
        json: true,
      };

      const result = await request(options);

      return result;
    } catch (err) {
      throw err;
    }
  }

  async patch(option, logData = {}) {
    try {
      const headers = {
        ...option.headers,
        'Content-Type': _.result(option, 'headers.contentType', 'application/json'),
        Authorization: _.result(option, 'headers.authorization'),
        'request-id': _.result(logData, 'requestId'),
      };

      const options = {
        ...option,
        method: 'PATCH',
        url: `${this.host}${option.url}`,
        headers,
        json: true,
      };

      const result = await request(options);

      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = RequestLib;
