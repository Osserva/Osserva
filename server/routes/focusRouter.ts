import express from 'express';
import focusController from '../controllers/focusController';
import authController from '../controllers/authController';

const focusRouter = express.Router();

focusRouter.get('/', authController.verifyToken, focusController.getFocus, (req, res) => {
    return res.sendStatus(200);
});

focusRouter.post('/add', authController.verifyToken, focusController.createFocus, (req, res) => {
    return res.sendStatus(200);
})

export default focusRouter;