import dotenv from 'dotenv';

import { app } from './init.js';

dotenv.config();

const PORT = process.env.PORT ? process.env.PORT : 8888;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});