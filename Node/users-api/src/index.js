import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import express from 'express';

import routes from './routes';
import logger from './utils/logger';
import genericErrorHandler from './middlewares/genericErrorHandler';

const loggingMiddleware = (req, res, next) => {
    const url = req.url;
    const method = req.method;

    logger.info(`${method} ${url}`);

    next();
};

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(loggingMiddleware);
app.use(routes);
app.use(genericErrorHandler);

app.listen(process.env.APP_PORT, () => {
    logger.info(`Listening on port ${process.env.APP_PORT}`);
});
