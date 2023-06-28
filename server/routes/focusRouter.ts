import express from 'express';
import focusController from '../controllers/focusController';
import authController from '../controllers/authController';

const focusRouter = express.Router();

focusRouter.get('/', focusController.getFocus, (req, res) => {
    return res.status(200).send(res.locals.focus);
});

focusRouter.get('/viewData', focusController.viewData, (req, res) => {
    return res.status(200).send(res.locals.data);
});

focusRouter.post('/add', focusController.addFocus, (req, res) => {
    return res.sendStatus(200);
})

export default focusRouter;