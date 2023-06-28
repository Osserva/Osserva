import express from 'express';
import entryController from '../controllers/entryController';
import focusController from '../controllers/focusController';

const entryRouter = express.Router();

entryRouter.post('/', entryController.getEntry, (req, res) => {
    return res.status(200).send(res.locals.entry);
});

entryRouter.post('/add', entryController.addEntry, (req, res) => {
    return res.sendStatus(200);
});


entryRouter.get('/viewData', entryController.viewData, (req, res) => {
    return res.status(200).send(res.locals.data);
});


export default entryRouter;