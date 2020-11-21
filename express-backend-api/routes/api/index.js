var router = require('express').Router();

router.use('/posts', require('./shared-drawings'));

// error handling and validation logic here

module.exports = router;