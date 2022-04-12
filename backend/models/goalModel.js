const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
    {
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