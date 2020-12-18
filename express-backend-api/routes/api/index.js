var router = require('express').Router();

router.use('/drawings', require('./shared-drawings'));
router.use('/draw', require('./drawing'));

// error handling and validation logic here

module.exports = router;