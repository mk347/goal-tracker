const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
    {
        // Pair current user with goal data
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        text: {
            type: String,
            reqired: [true, 'Please add a text value'],
        },
    }, 
    {
        timeStamps: true,
    }
)


// Watch quotes
module.exports = mongoose.model('Goal', goalSchema)