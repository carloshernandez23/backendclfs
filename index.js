const http = require('http');
const app = require('./app');


const server = http.createServer(app);
server.listen(3004, () => {
  console.log('Servidor: http://localhost:3003/');
  console.log('Puerto: 3003');
});