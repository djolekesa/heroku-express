import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());

app.get('/', (req, res) => {
  res.json({ message: 'Hey are you alive?' });
});

// server.use('/api/auth', authRouter);
// server.use('/api/lessons', lessonsRouter);
// server.use('/api/messages', messagesRouter);
// server.use('/api/users', usersRouter);

export default app;
