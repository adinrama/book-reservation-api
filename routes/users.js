const { login, register, getAllUsers } = require("../handlers/users");

const routes = [
  {
    method: "POST",
    path: "/v1/users/login",
    options: {
      handler: login,
    },
  },
  {
    method: "POST",
    path: "/v1/users/register",
    options: {
      handler: register,
    },
  },
  {
    method: "GET",
    path: "/v1/users",
    options: {
      handler: getAllUsers,
    },
  },
];

module.exports = routes;
