const users = require("../utils/users");

const validate = async function (decoded, request, h) {
  users.map((user) => {
    if (!user[decoded.id] && !user[decoded.email] && !user[decoded.roles]) {
      return { isValid: false };
    } else {
      return { isValid: true };
    }
  });
};

module.exports = validate;
