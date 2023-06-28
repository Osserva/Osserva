import { Request, Response, NextFunction } from 'express';
const db = require('../models/osservaModels');

interface EntryController {
  addEntry: (req: Request, res: Response, next: NextFunction) => void;
  getEntry: (req: Request, res: Response, next: NextFunction) => void;
  updateEntry: (req: Request, res: Response, next: NextFunction) => void;
  viewData: (req: Request, res: Response, next: NextFunction) => void;
  addNotes: (req: Request, res: Response, next: NextFunction) => void;
  getNotes: (req: Request, res: Response, next: NextFunction) => void;
}

const entryController: EntryController = {
  addEntry: async (req, res, next) => {
    console.log('entered create entry');
    try {
      // TODO: update query text to include notes???
      const query = 'INSERT INTO Focus_ratings (date, rating, focus_id) VALUES ($1, $2, $3);'
      // TODO: remove req.body.userId
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
      const query = 'SELECT fr.* FROM Focus_ratings fr JOIN Focuses f ON fr.focus_id = f.focus_id WHERE f.user_id = $1 AND fr.date = $2';
      // update values
      const { date } = req.body;
      // TODO: update userId
      const values = [1, date];
      const entry = await db.query(query, values);
      console.log(entry.rows)
      res.locals.ratings = entry.rows;
      
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
      // TODO: remove req.body.userId
      const values = [req.body.userId, req.body.entry];
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
  },

  addNotes: async (req, res, next) => {
    console.log('entered addNotes');
    try {
      // const query = 'INSERT INTO Notes (date, contents) VALUES ($1, $2);'
      const query = 'INSERT INTO Notes (contents, user_id) VALUES ($1, $2);'
      const { date, contents } = req.body;
      const user_id = 1
      // const values = [date, contents];
      const values = [contents, user_id];
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

  getNotes: async (req, res, next) => {
    try {
      const query = 'SELECT * FROM Notes;';
      const result = await db.query(query);
      console.log('Data:', result.rows);
      res.locals.notes = result.rows;

      return next();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
};

export default entryController;