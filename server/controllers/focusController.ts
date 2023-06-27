import { Request, Response, NextFunction } from 'express';
const db = require('../models/osservaModels');

interface FocusController {
  createFocus: (req: Request, res: Response, next: NextFunction) => void;
  getFocus: (req: Request, res: Response, next: NextFunction) => void;
}

module.exports = {
  createFocus: (req: Request, res: Response, next: NextFunction) => {},
  getFocus: (req: Request, res: Response, next: NextFunction) => {},
}