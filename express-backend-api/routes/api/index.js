var router = require('express').Router();

router.use('/', require('./shared-drawings'));

// error handling and validation logic here

module.exports = router;