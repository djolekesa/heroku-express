const app = require('./server/api');

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`\n*** Server running on port ${port} ***\n`);
});
