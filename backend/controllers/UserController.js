const User = require('../models/Pet');

module.exports = class UserController{
  static async register(req, res){
    const {name, email, phone, password, confirmPassword} = req.body
  }
}