import express from 'express';
import session from 'express-session';
import PostRouter from './Routers/postRouter.js';
import UserRouter from './Routers/userRouter.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'AOUDHADSLTGHLASDGLSDJHG',
    resave: false,
    saveUninitialized: false,
  })
);

app.use('/users', UserRouter);
app.use('/users/uploads', express.static('uploads'));
app.use('/posts', PostRouter);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('connected db'))
    .catch((err) => console.log(err));
});
