import { Request, Response, NextFunction } from 'express';
const db = require('../models/osservaModels');

interface FocusController {
  createFocus: (req: Request, res: Response, next: NextFunction) => void;
  getFocus: (req: Request, res: Response, next: NextFunction) => void;
  viewData: (req: Request, res: Response, next: NextFunction) => void;
}

const focusController: FocusController = {
  createFocus: async (req, res, next) => {
    console.log('entered create focus');
    try {
      // add query
      const query = 'INSERT INTO Focuses(user_id, focus_name, isTracking) VALUES($1, $2, $3);';
      // const values = [req.body.focus];
      const values = [2, 'focus 1', true]
      const focus = await db.query(query, values);
      console.log(`retrieves focus ${focus.focus_id}`)

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
      const query = 'SELECT * FROM Focuses WHERE user_id = $1;';
      // const values = [req.params.userId];
      const values = [1]
      const focus = await db.query(query, values);
      console.log(focus);

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

      return next();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}

export default focusController;