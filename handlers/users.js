const users = require("../utils/users");
require("dotenv").config();

const login = (request, h) => {
  const { email, password } = request.payload;

  for (i = 0; i < users.length; i++) {
    if (users[i].email == email && users[i].password == password) {
      return h
        .response({
          message: "Login successfully",
          status: "Success",
        })
        .code(200);
    }
  }

  h.response({
    message: "Invalid credentials",
    status: "Failed",
  }).code(401);
};

module.exports = { login };
