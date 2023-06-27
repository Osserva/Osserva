import { Request, Response, NextFunction } from 'express';
const db = require('../models/osservaModels');

interface SessionController {
  startSession: (req: Request, res: Response, next: NextFunction) => void;
}

module.exports = {
  startSession: (req: Request, res: Response, next: NextFunction) => {},
}