import stream from './stream';
import express from 'express';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
    res.render('index');
});

/* Mount stream route at /stream */
router.use('/stream', stream);

export default router;
