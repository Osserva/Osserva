import { Request, Response, NextFunction } from 'express';
const db = require('../models/osservaModels');

interface FocusController {
  createFocus: (req: Request, res: Response, next: NextFunction) => void;
  getFocus: (req: Request, res: Response, next: NextFunction) => void;
}

const focusController: FocusController = {
  createFocus: async (req, res, next) => {
    console.log('entered create focus');
    try {
      // add query
      const query = '(user_id, focus)';
      const values = [req.body.focus];
      console.log(values);
      await db.query(query, values);

      return next();
    } catch (error) {
      return next({
        log: `Error in createFocus controller method: ${error}`,
        status: 400,
        message: 'Error while creating new focus',
      });
    }
  },
  getFocus: async (req, res, next) => {
    console.log('entered get focus');
    try {
      const query = '(user_id)';
      const values = [req.params.userId];
      await db.query(query, values);

      return next();
    } catch (error) {
      return next({
        log: `Error in getFocus controller method: ${error}`,
        status: 400,
        message: 'Error while getting focus',
      });
    }
  }
}

export default focusController;