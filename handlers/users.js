const users = require("../utils/users");

const getAllUsers = (request, h) => {
  return h.response({
    message: "Success retrieve all users data",
    users,
  });
};

const getUserById = (request, h) => {
  const { id } = request.params;

  try {
    for (i = 0; i < users.length; i++) {
      if (users[i].id == id) {
        return h
          .response({
            message: `User with id ${id} successfully found`,
            status: "Success",
            user: users[i],
          })
          .code(200);
      }
    }

    return h
      .response({
        message: `User with id ${id} not found`,
        status: "Failed",
      })
      .code(404);
  } catch (err) {
    return h
      .response({
        message: `Can't find user with id ${id}`,
        status: "Failed",
        error: err.message,
      })
      .code(500);
  }
};

const login = (request, h) => {
  const { email, password } = request.payload;

  try {
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

    return h
      .response({
        message: "Invalid credentials",
        status: "Failed",
      })
      .code(401);
  } catch (err) {
    return h
      .response({
        message: "Server error",
        status: "Failed",
        ...err.message,
      })
      .code(500);
  }
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

  const id = users[users.length - 1].id + 1;
  const newUser = { id, name, email, password, gender, roles, address };
  users.push(newUser);

  try {
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
  } catch (err) {
    return h
      .response({
        message: "Server error",
        status: "Failed",
        error: err.message,
      })
      .code(500);
  }
};

module.exports = { getAllUsers, getUserById, login, register };
