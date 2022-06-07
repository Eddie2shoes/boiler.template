const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    res.send({ name: 'Sour Diesl', thcLevel: '35%' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
