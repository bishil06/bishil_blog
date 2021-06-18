import dotenv from 'dotenv';
import session from 'express-session';
import morgan from 'morgan';

dotenv.config()

export function loggerMiddleware(req, res, next) {
    if (process.env.NODE_ENV === 'production') {
        return morgan('combined')(req, res, next)
    }
    else if (process.env.NODE_ENV === 'develop') {
        return morgan('dev')(req, res, next)
    }
    else {
        return morgan('tiny')(req, res, next)
    }
}

export function sessionMiddleware(req, res, next) {
    return (session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: true
        }
    })(req, res, next))
}

export function localsMiddleware(req, res, next) {
}