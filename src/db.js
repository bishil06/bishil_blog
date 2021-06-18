import mongoose from 'mongoose';

export function connectDB(id, passwd, url) {
    return mongoose.connect(`mongodb://${id}:${passwd}@${url}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
}

