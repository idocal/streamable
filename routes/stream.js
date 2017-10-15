import express from 'express';
import mongoose from 'mongoose';
import Promise from 'bluebird';
import User from '../db';

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

    console.log(uri);

    // Connect to mongoDB
    let promise = mongoose.connect(uri, {
        useMongoClient: true,
        promiseLibrary: Promise
    });

    promise.then( (db, err) => {

        /*
         This is where the magic happens!
         Cursor is a Streamable object,
         We are iterating the cursor and returning the query
         */
        const cursor = User.find().cursor();

        // Data is streaming
        cursor.on('data', doc => {
            console.log(doc);
        });

        // Data stopped streaming
        cursor.on('end' ,() => {
            db.close();
            setTimeout(() => {
                res.send('OK!');
            }, 1000);
        });

    });

});

export default router;