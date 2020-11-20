var router = require('express').Router();
// var SharedDrawing = [....].model(SharedDrawing)

// url is api/
router.get('/', (req, res) => {
  res.send('Api call')
})

modules.exports = router;