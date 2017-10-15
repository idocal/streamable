import express from 'express';
import mongoose from 'mongoose';
import Promise from 'bluebird';
import tables from '../db';

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
    let inputTables = req.body['tables[]'];
    console.log(inputTables);
    let uri = 'mongodb://' + username + ':' + password + '@' + address + ':' + port + '/' + database;

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

        let finishedTables = 0;
        let numTables = (typeof(inputTables) == "string" ? 1 : inputTables.length);

        if (numTables > 1) {
            inputTables.forEach((table, index) => { // For each table selected in UI
                let cursor = tables[table].find({}).cursor();
                cursor.on('data', doc => {
                    console.log('\n\nSTREAMING NOW:\n');
                    console.log(doc); // The streamed output to console
                    console.log('\n-----------\n\n');
                });

                cursor.on('end', () => {
                    finishedTables ++;
                    if (finishedTables == inputTables.length) {
                        db.close();
                        setTimeout(() => {
                            res.send('OK!');
                        }, 1000); // Delay for UI loading purposes
                    }
                });


            });
        }

        else if (numTables == 1) {
            let cursor = tables[inputTables].find({}).cursor();
            cursor.on('data', doc => {
                console.log('\n\nSTREAMING NOW:\n');
                console.log(doc); // The streamed output to console
                console.log('\n-----------\n\n');
            });

            cursor.on('end', () => {
                db.close();
                setTimeout(() => {
                    res.send('OK!');
                }, 1000); // Delay for UI loading purposes
            });
        }

        else {
            db.close();
            res.send('OK!');
        }

    });

});

export default router;