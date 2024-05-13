const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.json({ message: 'I am Son of Hal and am always watching!' });
});

// server.use('/api/auth', authRouter);
// server.use('/api/lessons', lessonsRouter);
// server.use('/api/messages', messagesRouter);
// server.use('/api/users', usersRouter);

module.exports = server;
