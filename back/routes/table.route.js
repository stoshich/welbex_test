const Router = require('express')
const router = new Router()
const TableController = require('../controller/table.controller')

router.get('/table', TableController.getTable)

module.exports = router