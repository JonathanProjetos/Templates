require('dotenv').config();
require('express-async-errors');
const express = require('express');
const swagger = require('swagger-ui-express');
const swaggerFile = require('./doc/swagger.json');
const loginRouter = require('./routes/loginRouter');

const app = express();

app.use(express.json());

app.use('/docs', swagger.serve, swagger.setup(swaggerFile));
app.use('/', loginRouter);

app.use((err, _req, res, _next) => {
  const [status, message] = err.message.split('|');
  if (status === null ) throw new Error('500|Internal Server Error');
  res.status(Number(status)).json({ message });
});


module.exports = app;