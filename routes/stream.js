import express from 'express';

const router = express.Router();


/* Stream object URI */
router.post('/', (req, res) => {
    // Produce mongoDB URI from request
    let address = req.body.address;
    let port = req.body.port;
    let username = req.body.username;
    let password = req.body.password;
    let uri = 'mongodb://' + username + ':' + password + '@' + address + ':' + port;

    console.log(uri);

    // Connect to mongoDB
    // mongoose.connect(uri);

    let database = 'streamableDb';

});

export default router;