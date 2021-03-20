var api = require('./src/api.js').app;
var users = require('./src/users.json');

api.get('/', function (request, response) {
  response.json('NodeJS REST API');
});

api.get('/users', function (request, response) {
  response.json(users);
});

api.put('/users', function (request, response) {
  users[users.length] = request.body;
  response.json(users);
});

api.put('/users/:index', function (request, response) {
  users[request.params.index] = request.body;
  response.json(users);
});

api.delete('/users/:index', function (request, response) {
  users.splice(request.params.index, 1);
  response.json(users);
});

api.listen(3000, function () {
  console.log('Server running @ localhost:3000');
});
