const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    posts: {
      title: 'My first post',
      description: 'Random data you shoundnt access'
    }
  });
});

module.exports = router;