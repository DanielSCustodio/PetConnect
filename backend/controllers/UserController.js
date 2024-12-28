const User = require('../models/Pet');

module.exports = class UserController{
  static async register(req, res){
    res.json('Olá PetConnect')
  }
}