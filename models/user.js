const {Sequelize, skima} = require('./sequelize')

const User = skima.define('user', {
    idnum: {
        type: Sequelize.INTEGER,
        notNull : true,
        primaryKey : true,
        autoIncrement : true
    },
    email: {
        type: Sequelize.STRING,
        notNull : true,
        unique : true
    },
    password: {
        type: Sequelize.STRING,
        notNull : true
    },
    name: {
        type: Sequelize.STRING,
        notNull : true
    }},
    {tableName: 'user'
})

module.exports = {User}