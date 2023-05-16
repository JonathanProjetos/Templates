const { User } = require('../database/models');
const bcryptjs = require('bcryptjs');
const encrypt = require('../middlewares/encrypt');
const joiUser = require('../middlewares/joiBodyUser');
const createToken = require('../middlewares/token');

const LoginService = {
  Login: async (body) => {

    // valido o corpo da requisição
    const check = joiUser(body);
    
    // busco pelo email no banco de dados
    const user = await User.findOne({ where: { email: check.email }});
    console.log(user);
    
    // verifico se o email existe
    if (!user) throw new Error('404|user not found');
        
    // verifico se a senha está correta
    if (!bcryptjs.compareSync(check.password, user.passwordHash)) {
      throw new Error('401|Senha incorreta');
    }
    
    // gero o token
    const token = createToken.generateToken(check.email);
    
    return token;
  },

  TokenPresenceCheck: async (email) => {
    // busco pelo email no banco de dados
    const user = await User.findOne({ email });
  
    if (!user) throw new Error('401| unauthorized');
  
    return { message: 'ok' };
  },


  Register: async (body) => {

    // valido o corpo da requisição
    const check = joiUser(body);

    // busco pelo email no banco de dados
    const user = await User.findOne({ where: { email: check.email }});
  
    // verifico se o email existe
    if (user) throw new Error('409|user already registered');
  
    // criptografo a senha
    const password = encrypt(check.password);
  
    // crio o usuario
    await User.create({ email: check.email, passwordHash: password });
  
    return { message: 'successfully registered user' };
 
  },
}

module.exports = LoginService;