import { Request, Response, NextFunction } from 'express';
const db = require('../models/osservaModels');

interface FocusController {
  addFocus: (req: Request, res: Response, next: NextFunction) => void;
  getFocus: (req: Request, res: Response, next: NextFunction) => void;
  viewData: (req: Request, res: Response, next: NextFunction) => void;
}

const focusController: FocusController = {
  addFocus: async (req, res, next) => {
    console.log('entered addFocus');
    try {
      const query = 'INSERT INTO Focuses(user_id, focus_name, isTracking) VALUES($1, $2, $3);';
      const { name } = req.body;
      //TODO: remove user_id
      const user_id = 1;
      const values = [user_id, name, true];
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
    console.log('entered getFocus');
    try {
      const query = 'SELECT * FROM Focuses WHERE user_id = $1;';
      //TODO: remove user_id
      const user_id = 1;
      const values = [user_id];
      const focus = await db.query(query, values);
      res.locals.focus = focus.rows;

      return next();
    } catch (error) {
      return next({
        log: `Error in getFocus controller method: ${error}`,
        status: 400,
        message: 'Error while getting focus',
      });
    }
  },

  viewData: async (req, res, next) => {
    try {
      const query = 'SELECT * FROM Focuses;';
      const result = await db.query(query);
      console.log('Data:', result.rows);
      res.locals.data = result.rows;

      return next();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}

export default focusController;