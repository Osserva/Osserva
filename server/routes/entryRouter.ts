import express from 'express';
import entryController from '../controllers/entryController';

const entryRouter = express.Router();

entryRouter.post('/create', entryController.createEntry, (req, res, next) => {
    res.sendStatus(200);
});

entryRouter.post('/update', () => {console.log('entry router test')})


export default entryRouter;