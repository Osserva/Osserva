import express from 'express';
import entryController from '../controllers/entryController';

const entryRouter = express.Router();

entryRouter.post('/add', entryController.createEntry, (req, res) => {
    return res.sendStatus(200);
});

entryRouter.get('/', entryController.getEntry, (req, res) => {
    return res.sendStatus(200);
});


export default entryRouter;