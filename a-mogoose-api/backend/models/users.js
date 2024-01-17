import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: 3,
        maxLength: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        minLength: 8,
        maxLength: 50,
        required: true,
    },
    age: {
        type: Number, 
        min: 18,
        max: 200,
    },
    admin: {
        type: Boolean,
        default: false
    },
    department: {
        type: String,
        enum: [ "IT", "UX", "DEV", "HR"]
    }
})

export default mongoose.model('User', usersSchema);