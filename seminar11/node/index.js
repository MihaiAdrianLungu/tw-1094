const app = require('./app/app');

const User = require('./database/models/User');
const Order = require('./database/models/Oder');

User.hasMany(Order, { foreignKey: 'userId' });

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(5000, function() {
    console.log("Server listening on 5000");
})
