const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Conversations = db.define('conversations', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING
    },
    userId: {
        type: DataTypes.UUID
    }
})

module.exports = Conversations