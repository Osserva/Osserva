import bcrypt from 
import { Request, Response, NextFunction } from 'express';
const db = require('../models/osservaModels');

interface UserController {
  registerUser: (req: Request, res: Response, next: NextFunction) => void;
  verifyUser: (req: Request, res: Response, next: NextFunction) => void;
}

module.exports = {
  registerUser: (req: Request, res: Response, next: NextFunction) => {},
  verifyUser: (req: Request, res: Response, next: NextFunction) => {}
}

const userController: UserController = {
  registerUser: async (req, res, next) => {
    try {
      // 
      const values = [req.body.username, req.body.password]
      return next();
    } catch (error) {
      
    }
  }
}