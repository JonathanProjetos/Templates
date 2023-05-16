const { Router } = require('express');
const LoginController = require('../controllers/login');
const checkToken = require('../middlewares/tokenValidation');

const loginRouter = Router();

loginRouter.post('/login', LoginController.Login);
loginRouter.get('/login/validate', checkToken.verifyToken, LoginController.TokenPresenceCheck);
loginRouter.post('/register', LoginController.Register);

module.exports = loginRouter;