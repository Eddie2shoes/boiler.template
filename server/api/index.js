const router = require('express').Router();

router.use('/strains', require('./strains'));

router.use((req, res, next) => {
  const err = new Error('Api route not found');
  err.status = 404;
  next(err);
});

module.exports = router;
