const express = require('express');

const taskApi = require('./taskRoutes');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API Central Familiar'
  });
});

router.use('/task', taskApi);

module.exports = router;
