const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Participants = db.define('participants', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID
    },
    conversationId: {
        type: DataTypes.UUID
    }
})

module.exports = Participants