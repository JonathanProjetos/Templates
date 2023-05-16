const LoginServices = require('../services/login');

const LoginController = {

  Login: async (req, res) => {
    const result = await LoginServices.Login(req.body);
    res.status(200).json({ token: result });
  },

  TokenPresenceCheck: async (req, res) => {
    const { email } = req.email;
    const message = await LoginServices.TokenPresenceCheck(email);
    res.status(200).json(message);
  },

  Register: async (req, res) => {
    const message = await LoginServices.Register(req.body);
    res.status(200).json(message);
  },

};

module.exports = LoginController;