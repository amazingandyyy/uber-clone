import mongoose from 'mongoose';

const Schema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    driving: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model('Driver', Schema);