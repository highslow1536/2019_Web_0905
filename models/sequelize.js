const Sequelize = require('sequelize')

const skima = new Sequelize({
    dialect: 'sqlite',
    storage: './db-dev.sql',
    operatorsAliases: Sequelize.Op,
    logging: console.log
});

module.exports = {
    Sequelize,
    skima
}