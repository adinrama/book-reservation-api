const {
  login,
  register,
  getAllUsers,
  getUserById,
} = require("../handlers/users");

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
  {
    method: "GET",
    path: "/v1/users/{id}",
    options: {
      handler: getUserById,
    },
  },
];

module.exports = routes;
