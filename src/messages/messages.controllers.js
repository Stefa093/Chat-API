const Messages = require('../models/messages.models');
const uuid = require('uuid');

const findMessagesByConversationId = async (conversationId) => {
  const data = await Messages.findAll({
    where: {
      conversationId: conversationId,
    },
  });
  return data;
};

const findAMessageById = async (id) => {
  const data = await Messages.findOne({
    where: {
      id: id,
    },
  });
  return data;
};

const createMessage = async (obj) => {
  const data = await Messages.create({
    id: uuid.v4(),
    userId: obj.userId,
    conversationId: obj.conversationId,
    message: obj.message,
  });
  return data;
};

const deleteMessage = async (id) => {
  const data = await Messages.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

module.exports = {
  findMessagesByConversationId,
  findAMessageById,
  createMessage,
  deleteMessage,
};
