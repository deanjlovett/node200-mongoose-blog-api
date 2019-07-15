const server = require('./app');
//require('dotenv').config();
const PORT = process.env.PORT || 8080;

server.listen(PORT, function() {
  console.log(`Server is listening on http://localhost:${PORT}`);
});