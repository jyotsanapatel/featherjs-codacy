const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  console.log('app',app);
  app.configure(users);
};
