import mongoose from 'mongoose';

// Users collection Schema
const schema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    ip_address: String
});

const User = mongoose.model('User', schema);

export default User;