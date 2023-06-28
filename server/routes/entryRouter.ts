import express from 'express';
import entryController from '../controllers/entryController';
import authController from '../controllers/authController';

const entryRouter = express.Router();

entryRouter.post('/add', authController.verifyToken, entryController.createEntry, (req, res) => {
    return res.sendStatus(200);
});

entryRouter.get('/', authController.verifyToken, entryController.getEntry, (req, res) => {
    return res.sendStatus(200);
});


export default entryRouter;