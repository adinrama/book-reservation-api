const users = require("../utils/users");

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

const register = (request, h) => {
  const { name, email, password, gender, roles, address } = request.payload;

  for (i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      return h
        .response({
          message: "User already exist",
          status: "Failed",
        })
        .code(400);
    }
  }

  const id = ++users[users.length - 1].id;
  const newUser = { id, name, email, password, gender, roles, address };
  users.push(newUser);

  const isSuccess = users.filter((user) => user.email === email).length > 0;

  if (isSuccess) {
    return h
      .response({
        message: "Register successfully",
        status: "Success",
        newUser,
      })
      .code(201);
  }

  h.response({
    message: "Register failed",
    status: "Failed",
  }).code(500);
};

module.exports = { login, register };
