import express from 'express';
import helmet from 'helmet';
import { loggerMiddleware, sessionMiddleware } from './middlewares.js';

export function createApplication(env) {
    const { NODE_ENV, SESSION_SECRET } = env

    const app = express();

    app.use(loggerMiddleware(NODE_ENV))
    app.use(helmet());
    app.use(sessionMiddleware(SESSION_SECRET));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.set('view engine', 'pug');

    app.get('/', (req, res) => {
        res.render('main');
    });

    return app;
}
