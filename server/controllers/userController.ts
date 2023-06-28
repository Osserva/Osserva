import bcrypt from 'bcryptjs';
import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');
const db = require('../models/osservaModels');

interface UserController {
  registerUser: (req: Request, res: Response, next: NextFunction) => void;
  loginUser: (req: Request, res: Response, next: NextFunction) => void;
}

const userController: UserController = {
  registerUser: async (req, res, next) => {
    try {
      console.log(req);
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const query =
        'INSERT INTO users(username, password) VALUES($1, $2) RETURNING *';
      const values = [req.body.username, hashedPassword];
      const newUser = await db.query(query, values);
      res.locals.user = newUser.rows[0];
      return next();
    } catch (error) {
      return next({
        log: `Error in registerUser controller method: ${error}`,
        status: 400,
        message: 'Error while registering new user',
      });
    }
  },

  loginUser: async (req, res, next) => {
    try {
      // Get user with the given username
      console.log(req.body);
      const query = 'SELECT * FROM users WHERE username = $1';
      const values = [req.body.username];
      const user = await db.query(query, values);

      // If no user is found with this username, throw an error
      if (!user.rows.length) {
        throw new Error('No user found with this username');
      }

      // Check if the password is correct. bcrypt.compare will hash the provided password and compare it to the stored hash.
      const match = await bcrypt.compare(
        req.body.password,
        user.rows[0].password
      );

      // If the passwords do not match, throw an error
      if (!match) {
        throw new Error('Incorrect password');
      }

      // create a JWT. The payload is the user's id, the secret key is stored in env, and it will expire in 1 hour
      const token = jwt.sign(
        { user_id: user.rows[0].user_id },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      // create a cookie with a key of jwtToken and a value of the jwtToken
      res.cookie('jwtToken', token, { httpOnly: true });

      res.locals.user = {
        token: token,
        user: user.rows[0].username,
      };

      return next();
    } catch (err) {
      if (err instanceof Error) {
        // If an error occurs, pass it to the error handling middleware
        return next({
          log: `Error in loginUser controller method ${err}`,
          status: 400,
          message: { err: err.message },
        });
      } else throw err;
    }
  },
};

export default userController;
