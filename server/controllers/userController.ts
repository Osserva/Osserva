import { Request, Response, NextFunction } from 'express';
const db = require('../models/osservaModels');

interface UserController {
  createUser: (req: Request, res: Response, next: NextFunction) => void;
  verifyUser: (req: Request, res: Response, next: NextFunction) => void;
}

module.exports = {
  createUser: (req: Request, res: Response, next: NextFunction) => {},
  verifyUser: (req: Request, res: Response, next: NextFunction) => {}
}