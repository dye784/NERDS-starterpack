const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello from router');
});

module.exports = router;
