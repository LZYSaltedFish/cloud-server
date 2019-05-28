const router = require('express').Router()
const todo = require('./todo')


// 托管静态网页
router.get('/', function (req, res) {
  res.sendFile('../public/index.html')
})

router.use('/api', todo)

module.exports = router
