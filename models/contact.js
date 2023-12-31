const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: String,
    tlf: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});


contactSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;

    }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;