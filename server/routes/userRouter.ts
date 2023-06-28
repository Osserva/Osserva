import express from 'express';
import userController from '../controllers/userController';

const userRouter = express.Router();

userRouter.post('/register', userController.registerUser, (req, res, next) => {
  return res.status(201).json({ message: 'success' });
});

userRouter.post('/login', userController.loginUser, (req, res, next) => {
  res.status(202).json(res.locals.user);
});

export default userRouter;
