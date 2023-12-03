const users = require("../utils/users");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { SECRET_KEY } = process.env;

const login = (request, h) => {
  const { email, password } = request.payload;

  for (i = 0; i < users.length; i++) {
    if (users[i].email == email && users[i].password == password) {
      users[i].token = jwt.sign(
        {
          email: users[i].email,
          roles: users[i].roles,
        },
        SECRET_KEY,
        { expiresIn: "24h" }
      );

      return h
        .response({
          message: "Login successfully",
          status: "Success",
          token: users[i].token,
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
