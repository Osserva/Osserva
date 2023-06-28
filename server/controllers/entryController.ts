import { Request, Response, NextFunction } from 'express';
const db = require('../models/osservaModels');

interface EntryController {
  addRatings: (req: Request, res: Response, next: NextFunction) => void;
  getRatings: (req: Request, res: Response, next: NextFunction) => void;
  addNotes: (req: Request, res: Response, next: NextFunction) => void;
  getNotes: (req: Request, res: Response, next: NextFunction) => void;
  getAllNotes: (req: Request, res: Response, next: NextFunction) => void;
  getAllRatings: (req: Request, res: Response, next: NextFunction) => void;
  // updateEntry: (req: Request, res: Response, next: NextFunction) => void;
}

const entryController: EntryController = {
  addRatings: async (req, res, next) => {
    console.log('entered addRatings');
    try {
      const query = 'INSERT INTO Focus_ratings (date, rating, focus_id) VALUES ($1, $2, $3);'
      // TODO: remove req.body.userId
      const { date, ratings } = req.body;
      for (const el of ratings) {
        const { rating, id } = el;
        const values = [date, rating, id];
        await db.query(query, values);
      }
      
      return next();
    } catch (error) {
      return next({
        log: `Error in createEntry controller method: ${error}`,
        status: 400,
        message: 'Error while creating new entry',
      });
    }
  },

  getRatings: async (req, res, next) => {
    console.log('entered getRatings');
    try {
      const query = 'SELECT fr.* FROM Focus_ratings fr JOIN Focuses f ON fr.focus_id = f.focus_id WHERE f.user_id = $1 AND fr.date = $2';
      const { date } = req.body;
      // TODO: update userId
      const user_id = 1;
      const values = [user_id, date];
      const entry = await db.query(query, values);
      console.log(entry.rows)
      res.locals.ratings = entry.rows;
      
      return next();
    } catch (error) {
      return next({
        log: `Error in getRatings controller method: ${error}`,
        status: 400,
        message: 'Error while getting entry',
      });
    }
  },

  addNotes: async (req, res, next) => {
    console.log('entered addNotes');
    try {
      const query = 'INSERT INTO Notes (date, contents, user_id) VALUES ($1, $2, $3);'
      const { contents } = req.body.notes;
      //TODO: remove user_id
      const user_id = 1;
      const { date } = req.body;
      const values = [date, contents, user_id];
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
    console.log('entered getNotes')
    try {
      const query = 'SELECT * FROM Notes WHERE user_id = $1 AND date = $2;';
      //TODO: remove userId
      const { date } = req.body;
      const values = [1, date];
      const notes = await db.query(query, values);
      console.log('notes:', notes.rows);
      res.locals.notes = notes.rows;

      return next();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

  getAllNotes: async (req, res, next) => {
    console.log('entered getAllNotes')
    try {
      const query = 'SELECT * FROM Notes;';
      const notes = await db.query(query);
      console.log('notes:', notes.rows);
      res.locals.notes = notes.rows;

      return next();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

  getAllRatings: async (req, res, next) => {
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

    // updateEntry: async (req, res, next) => {
  //   try {
  //     // add query text
  //     const query = '(user_id, date, entryData)';
  //     // TODO: remove req.body.userId
  //     const values = [req.body.userId, req.body.entry];
  //     const entry = await db.query(query, values);
  //     res.locals.entry = entry.rows;

  //     return next();
  //   } catch (error) {
  //     return next({
  //       log: `Error in updateEntry controller method: ${error}`,
  //       status: 400,
  //       message: 'Error while updating entry',
  //     });
  //   }
  // },
};

export default entryController;