const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

app.use((err, _req, res, _next) => {
  const [status, message] = err.message.split('|');
  if (status === '') throw new Error('500|Internal Server Error');
  res.status(Number(status)).json({ message });
})

module.exports = app;