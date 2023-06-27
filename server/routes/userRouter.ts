import express from 'express';

const userRouter = express.Router();

// userRouter.post(
//     '/register',
//     userController.registerUser,
//     userController.loginUser,
//     (req, res, next) => {
//       res.sendStatus(201);
//     },
//   );
  
//   userRouter.post('/login', userController.loginUser, (req, res, next) => {
//     res.status(204).send('/login controller not yet implemented');
//   });