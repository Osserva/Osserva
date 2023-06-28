import { Request, Response, NextFunction } from 'express';
const db = require('../models/osservaModels');

interface EntryController {
  addEntry: (req: Request, res: Response, next: NextFunction) => void;
  getEntry: (req: Request, res: Response, next: NextFunction) => void;
  updateEntry: (req: Request, res: Response, next: NextFunction) => void;
  viewData: (req: Request, res: Response, next: NextFunction) => void;
}

const entryController: EntryController = {
  addEntry: async (req, res, next) => {
    console.log('entered create entry');
    try {
      // update query text
      const query = 'INSERT INTO Focus_ratings (date, rating, focus_id) VALUES ($1, $2, $3);'
      // update values
      const {date, rating, id} = req.body;
      const values = [date, rating, id];
      await db.query(query, values);
      
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
    console.log('entered get entry');
    try {
      // update query text
      const query = 'SELECT * FROM Focus_ratings WHERE date = $1';
      // update values
      const values = [req.body.date];
      const entry = await db.query(query, values);
      res.locals.entry = entry.rows;
      
      return next();
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
      // add query text
      const query = '(user_id, date, entryData)';
      // update values
      const values = [req.params.userId, req.body.entry];
      const entry = await db.query(query, values);
      res.locals.entry = entry.rows;
    } catch (error) {
      return next({
        log: `Error in updateEntry controller method: ${error}`,
        status: 400,
        message: 'Error while updating entry',
      });
    }
  },
  viewData: async (req, res, next) => {
    try {
      const query = 'SELECT * FROM Focus_ratings;';
      const result = await db.query(query);
      console.log('Data:', result.rows);
      res.locals.data = result.rows;

      return next();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
};

export default entryController;