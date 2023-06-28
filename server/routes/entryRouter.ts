import express from 'express';
import entryController from '../controllers/entryController';
import authController from '../controllers/authController';

const entryRouter = express.Router();

// entry (ratings and notes):

entryRouter.post('/', entryController.getEntry, entryController.getNotes, (req, res) => {
    return res.status(200).send({ratings: res.locals.ratings, notes: res.locals.notes});
});

//TODO: test

entryRouter.post('/add', entryController.addEntry, entryController.addNotes, (req, res) => {
    return res.status(200).send({ratings: res.locals.ratings, notes: res.locals.notes});
});

// ratings:

entryRouter.post('/ratings', entryController.getEntry, (req, res) => {
    return res.status(200).send(res.locals.ratings);
});

entryRouter.post('/addRatings', entryController.addEntry, (req, res) => {
    return res.sendStatus(200);
});

entryRouter.get('/allRatings', entryController.getAllRatings, (req, res) => {
    return res.status(200).send(res.locals.data);
});

// notes:

entryRouter.post('/addNotes', entryController.addNotes, (req, res) => {
    return res.sendStatus(200);
});

entryRouter.post('/getNotes', entryController.getNotes, (req, res) => {
    return res.status(200).send(res.locals.notes);
});

entryRouter.post('/getAllNotes', entryController.getAllNotes, (req, res) => {
    return res.status(200).send(res.locals.notes);
});

export default entryRouter;