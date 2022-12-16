const Messages = require('../models/messages.models')
const Conversations = require('../models/conversations.models')
const uuid = require('uuid')

const findAllMessages = async () => {
    const data = await Messages.findAll({
        include: {
            model : Conversations
        }
    })
    return data
}

const createMessage = async (obj) => {
    const data = await Messages.create({
        id: uuid.v4(),
        userId: obj.userId,
        conversationId: obj.conversationId,
        message: obj.message
    })
    return data
}

module.exports = {
    findAllMessages,
    createMessage
}