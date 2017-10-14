import express from 'express';
import mongoose from 'mongoose';
import Promise from 'bluebird';

const router = express.Router();

mongoose.Promise = Promise;

/* Stream object URI */
router.post('/', (req, res) => {

    // Produce mongoDB URI from request
    let address = req.body.address;
    let port = req.body.port;
    let username = req.body.username;
    let password = req.body.password;
    let database = 'streamableDb';
    let uri = 'mongodb://' + username + ':' + password + '@' + address + ':' + port + '/' + database;

    // Connect to mongoDB
    let promise = mongoose.connect(uri, {
        useMongoClient: true,
        promiseLibrary: Promise
    });

    promise.then( (db, err) => {
        // Users collection querying
        let schema = new mongoose.Schema({
            id: Number,
            first_name: String,
            last_name: String,
            email: String,
            gender: String,
            ip_address: String
        });

        let User = mongoose.model('User', schema);

        User.findOne({first_name : 'Henri'}, (err, user) => {
            console.dir(user);
        });

    });

});

export default router;