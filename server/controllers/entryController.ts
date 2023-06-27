import { Request, Response, NextFunction } from 'express';
const db = require('../models/osservaModels');

interface EntryController {
  createEntry: (req: Request, res: Response, next: NextFunction) => void;
  getEntry: (req: Request, res: Response, next: NextFunction) => void;
  updateEntry: (req: Request, res: Response, next: NextFunction) => void;
}

const entryController: EntryController = {
  createEntry: async (req, res, next) => {
    try {
      const text = '(user_id, date)';
      // add current date to values
      const values = [req.body.userId];
      // do we need to query the new entry at this point?

      return next();
    } catch (error) {
      return next({
        log: `Error in createEntry controller method: ${error}`,
        status: 400,
        message: 'Error while creating new entry',
      });
    }
  },
  getEntry: async (req, res, next) => {
    try {
      
    } catch (error) {
      return next({
        log: `Error in getEntry controller method: ${error}`,
        status: 400,
        message: 'Error while getting entry',
      });
    }
  },
  updateEntry: async (req, res, next) => {
    try {
      
    } catch (error) {
      return next({
        log: `Error in updateEntry controller method: ${error}`,
        status: 400,
        message: 'Error while updating entry',
      });
    }
  }
};

export default entryController;