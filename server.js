import dotenv from 'dotenv';

import { createApplication } from './src/init.js';
import { connectDB } from './src/db.js'

dotenv.config();

const PORT = process.env.PORT | 8888;
const { MONGO_ID, MONGO_PASSWD, MONGO_URL } = process.env

const app = createApplication(process.env)
const mongoose = await connectDB(MONGO_ID, MONGO_PASSWD, MONGO_URL)
    .then((mongoose) => {
        console.log('db connect success')

        mongoose.connection.on('error', (err) => console.error(err))
        return mongoose
    })
    .catch((err) => {
        console.error('db connect error', err)
        return false
    })

if (mongoose) {
    app.listen(PORT, () => {
        console.log(`server running on http://localhost:${PORT}`);
    });
}

