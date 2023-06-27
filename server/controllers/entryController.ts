import { Request, Response, NextFunction } from 'express';
const db = require('../models/osservaModels');

interface EntryController {
  createEntry: (req: Request, res: Response, next: NextFunction) => void;
  getEntry: (req: Request, res: Response, next: NextFunction) => void;
  updateEntry: (req: Request, res: Response, next: NextFunction) => void;
}

module.exports = {
  createEntry: (req: Request, res: Response, next: NextFunction) => {},
  getEntry: (req: Request, res: Response, next: NextFunction) => {},
  updateEntry: (req: Request, res: Response, next: NextFunction) => {}
}

