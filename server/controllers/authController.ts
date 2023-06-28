import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken'); // Import JSON Web Token library

interface authController {
  verifyToken: (req: Request, res: Response, next: NextFunction) => void;
}

const authController: authController = {
  verifyToken: async (req, res, next) => {

    // get the value of the jwttoken passed in on the req obj
    const token = req.cookies.jwtToken;
  
    // If no token is provided, invoke global error handler
    if (!token) return next({log: `Error in authController method`,
    status: 400,
    message: 'Error while registering new user',
    })
  
    //
    const verified = await jwt.verify(token, process.env.JWT_SECRET)
    
    if (!verified) return next({log: `Error in authController method`,
    status: 400,
    message: 'Error while registering new user',
    })
  
    return next();
  }
}

export default authController;