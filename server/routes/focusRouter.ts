import express from 'express';
import focusController from '../controllers/focusController';

const focusRouter = express.Router();

focusRouter.get('/', focusController.getFocus, (req, res) => {
    return res.sendStatus(200);
});

focusRouter.post('/add', focusController.createFocus, (req, res) => {
    return res.sendStatus(200);
})

export default focusRouter;