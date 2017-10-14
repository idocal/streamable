import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
    // res.json({
    //     title: 'Express'
    // });
    res.render('index');
});

/* Stream object URL */
router.get('/stream', (req, res) => {
    res.json({
        table: 'table1',
        data: {
            key: 'val',
            keyIndex: 2,
            prop: 'Hello'
        }
    });
});

export default router;
