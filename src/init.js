import express from 'express';
import helmet from 'helmet';
import { loggerMiddleware, sessionMiddleware } from './middlewares.js';

export const app = express();

app.use(loggerMiddleware)
app.use(helmet());
app.use(sessionMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('main');
});

