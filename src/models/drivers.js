import mongoose from 'mongoose';

const Schema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    driving: Boolean
})

export default mongoose.model('Driver', Schema);