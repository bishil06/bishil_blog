import session from 'express-session';
import morgan from 'morgan';

export function loggerMiddleware(nodeEnv) {
    return (req, res, next) => {
        if (nodeEnv === 'production') {
            return morgan('combined')(req, res, next)
        }
        else if (nodeEnv === 'develop') {
            return morgan('dev')(req, res, next)
        }
        else {
            return morgan('tiny')(req, res, next)
        }
    }
}

export function sessionMiddleware(sessionSecret) {
    return (req, res, next) => {
        return session({
            secret: sessionSecret,
            resave: false,
            saveUninitialized: false,
            cookie: {
                secure: true
            }
        })(req, res, next)
    }
}

export function localsMiddleware(req, res, next) {
}