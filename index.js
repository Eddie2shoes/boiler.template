const app = require('./server');
const PORT = process.env.PORT || 1337;
const db = require('./server/db/database');

db.sync().then(() => {
  app.listen(PORT, () => {
    console.log('Listening on port', PORT);
  });
});
