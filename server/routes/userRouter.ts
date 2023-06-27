import express from 'express';
import userController from '../controllers/userController';

const userRouter = express.Router();

userRouter.post(
    '/register',
    userController.registerUser,
    userController.loginUser,
    (req, res, next) => {
      res.sendStatus(201);
    },
  );
  
  userRouter.post('/login', userController.loginUser, (req, res, next) => {
    res.status(204);
  });

  export default userRouter;