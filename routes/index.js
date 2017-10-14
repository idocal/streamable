import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
    res.render('index');
});

/* Stream object URL */
router.post('/stream', (req, res) => {
    let address = req.body.address;
    let port = req.body.port;
    let username = req.body.username;
    let password = req.body.password;


});

export default router;
