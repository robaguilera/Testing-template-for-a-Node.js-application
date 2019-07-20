function AuthController(user) {

  function isAuthorized(user) {
    return user.age >= 18;
  }

  return { isAuthorized };
}

module.exports = AuthController();