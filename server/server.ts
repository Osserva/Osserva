import express, {
    Express,
    Request,
    Response,
    NextFunction,
    ErrorRequestHandler,
  } from 'express';
// import path from 'path';
import userRouter from './routes/userRouter';
import entryRouter from './routes/entryRouter';
import focusRouter from './routes/focusRouter';

// Ports
const PORT_1 = 4000;
const PORT_2 = 4001;
const PORT_3 = 4002;

// Servers
const app1: Express = express();
const app2: Express = express();
const app3: Express = express();

// Body Parsers
app1.use(express.json());
app1.use(express.urlencoded({ extended: true }));

app2.use(express.json());
app2.use(express.urlencoded({ extended: true }));

app3.use(express.json());
app3.use(express.urlencoded({ extended: true }));

// Routers
app1.use('/user', userRouter);
app1.use('/entry', entryRouter)
app1.use('/focus', focusRouter);

app2.use('/user', userRouter);
app2.use('/entry', entryRouter)
app2.use('/focus', focusRouter);

app3.use('/user', userRouter);
app3.use('/entry', entryRouter)
app3.use('/focus', focusRouter);


// 404 handlers
app1.use('*', (req, res) => {
    res.status(404).send('Not Found');
});
app2.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

app3.use('*', (req, res) => {
  res.status(404).send('Not Found');
});


// Global Error Handlers
app1.use(
    (
      err: ErrorRequestHandler,
      req: Request,
      res: Response,
      next: NextFunction,
    ) => {
      const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
      };
      const errorObj = Object.assign({}, defaultErr, err);
      console.log(errorObj.log);
      return res.status(errorObj.status).json(errorObj.message);
    },
);
app2.use(
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  },
);

app3.use(
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  },
);

// Listeners
app1.listen(PORT_1, () => console.log('listening on port ', PORT_1));
app2.listen(PORT_2, () => console.log('listening on port ', PORT_2));
app3.listen(PORT_3, () => console.log('listening on port ', PORT_3));