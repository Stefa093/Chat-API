const {findParticipantConversations} = require('../participants/participants.controllers')

const participateValidate = (req, res, next) => {
    const conversationId = req.params.conversation_id
    const userId = req.user.id

    findParticipantConversations(userId, conversationId)
    .then(data => {
        if (data) {
            next()
        } res.status(400).json({
            message: 'You are not participant of this conversation'
        })
    })
    .catch(err => {
        res.status(400).json({
            message : err.message
        })
    })
}

module.exports = participateValidate