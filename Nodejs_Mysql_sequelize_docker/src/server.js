const app = require('./app');
require('dotenv').config();

const PORT = process.env.API_PORT || 3001;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));