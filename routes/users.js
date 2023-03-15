const express = require('express');

const router = express.Router();

// localhost:4000/users
router.get('/', (req, res) => {
  res.render('users', { user: '조성희' });
});

module.exports = router;
