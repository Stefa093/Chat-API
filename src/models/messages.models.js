const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Messages = db.define('messages', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID
    },
    conversationId: {
        type: DataTypes.UUID
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Messages