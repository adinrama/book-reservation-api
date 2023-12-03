const { login } = require("../handlers/users");

const routes = [
  {
    method: "POST",
    path: "/v1/users/login",
    handler: login,
  },
];

module.exports = routes;
