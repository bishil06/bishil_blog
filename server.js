import { app } from './init.js';

const PORT = process.env.PORT ? process.env.PORT : 8888;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});