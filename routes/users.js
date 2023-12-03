const { login, register } = require("../handlers/users");

const routes = [
  {
    method: "POST",
    path: "/v1/users/login",
    handler: login,
  },
  {
    method: "POST",
    path: "/v1/users/register",
    handler: register,
  },
];

module.exports = routes;
