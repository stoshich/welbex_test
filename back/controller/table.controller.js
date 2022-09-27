const connectionData = require('../mysql')

class TableController {
    async getTable(req, res) {
        const sql = "SELECT * FROM test_table"
        await connectionData.query(sql)
            .then(result => {
                res.json(result[0])
            })
    }
}

module.exports = new TableController()