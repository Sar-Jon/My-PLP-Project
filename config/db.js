const Sequelize = require('sequelize');
const sequelize = new Sequelize('healthwatch_db', 'root', 'One23four!', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
