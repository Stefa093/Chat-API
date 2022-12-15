const Messages = require('../models/messages.models')
const uuid = require('uuid')

const createMessage = async (obj) => {
    const data = await Messages.create({
        id: uuid.v4(),
        userId: object.userId,
        conversationId: obj.conversationId,
        message: obj.message
    })
    return data
}

module.exports = {
    createMessage
}