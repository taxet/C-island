var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json.bind({
        api: 'api'
    })
})

modules.exports = router;
