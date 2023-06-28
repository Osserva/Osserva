import express from 'express';
import userController from '../controllers/userController';

const userRouter = express.Router();

userRouter.post(
    '/register',
    userController.registerUser,
    (req, res, next) => {
      res.sendStatus(201);
    },
  );
  
  userRouter.post('/login', 
    userController.loginUser,
    (req, res, next) => {
    res.status(202).json(res.locals.user);
  });

  export default userRouter;