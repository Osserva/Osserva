import express from 'express';
import entryController from '../controllers/entryController';
import authController from '../controllers/authController';

const entryRouter = express.Router();

entryRouter.post('/ratings', entryController.getEntry, (req, res) => {
    return res.status(200).send(res.locals.ratings);
});

entryRouter.post('/', entryController.getEntry, entryController.getNotes, (req, res) => {
    return res.status(200).send({ratings: res.locals.ratings, notes: res.locals.notes});
});

entryRouter.post('/add', entryController.addEntry, (req, res) => {
    return res.sendStatus(200);
});

// notes:

entryRouter.post('/addNotes', entryController.addNotes, (req, res) => {
    return res.sendStatus(200);
});

entryRouter.get('/getNotes', entryController.getNotes, (req, res) => {
    return res.status(200).send(res.locals.data);
});

// notes and ratings:

entryRouter.get('/viewData', entryController.viewData, (req, res) => {
    return res.status(200).send(res.locals.data);
});

export default entryRouter;