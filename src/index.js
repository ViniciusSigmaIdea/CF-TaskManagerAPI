const app = require('./app');

(async () => {
  const database = require('./db/db');

  try {
      const resultado = await database.sync();
      console.log(resultado);
  } catch (error) {
      console.log(error);
  }
})();

const port = process.env.PORT;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
