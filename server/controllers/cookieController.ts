import { Request, Response, NextFunction } from 'express';
const db = require('../models/osservaModels');

interface CookieController {
  setSSIDCookie: (req: Request, res: Response, next: NextFunction) => void;
}

module.exports = {
  setSSIDCookie: (req: Request, res: Response, next: NextFunction) => {},
}