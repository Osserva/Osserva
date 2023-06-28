import express, {
    Express,
    Request,
    Response,
    NextFunction,
    ErrorRequestHandler,
  } from 'express';
import path from 'path';
import userRouter from './routes/userRouter';
import entryRouter from './routes/entryRouter';
import focusRouter from './routes/focusRouter';

const PORT = process.env.PORT || 3000;

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/', () => {console.log('test')});
app.use('/user', userRouter);
app.use('/entry', entryRouter)
app.use('/focus', focusRouter);

app.get('/test', (req, res) => {
    res.status(200).send('Hello world');
});

/**
 * 404 handler
 */
app.use('*', (req, res) => {
    res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use(
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

  app.listen(PORT, () => console.log('listening on port ', PORT));

  export default app;