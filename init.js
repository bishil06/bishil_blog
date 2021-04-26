import express from 'express';

export const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('main');
});

