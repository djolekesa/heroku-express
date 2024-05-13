import app from './app';
import http from 'http';
import https from 'https';

const port = process.env.PORT || 5000;

const server = http.createServer({}, app);

server.listen(port, () => {
  console.log(`\n*** Server running on port ${port} ***\n`);
});
