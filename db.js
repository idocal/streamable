import mongoose from 'mongoose';

// Users collection Schema
const userSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    ip_address: String
});

const User = mongoose.model('User', userSchema);

// Restaurants collection Schema
const restaurantSchema = new mongoose.Schema({
    id: Number,
    name: String,
    address: String,
    lat: Number,
    long: Number,
    phone: String
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

// Cars collection Schema
const carSchema = new mongoose.Schema({
    id: Number,
    company: String,
    model: String,
    year: Number
});

const Car = mongoose.model('Car', carSchema);

const tables = {
    User: User,
    Car: Car,
    Restaurant: Restaurant
};

export default tables;