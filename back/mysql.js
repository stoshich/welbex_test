const dotenv = require('dotenv')
const mysql = require('mysql2')

dotenv.config()

// Создаем подключение и базу данных

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD,
})

connection.query('CREATE DATABASE IF NOT EXISTS welbex_test', function (err, results) {
    if (err) console.log('Ошибка при создании бд', err)
    else console.log('База данных создана')
})

connection.end()

// Создаем подключение к БД

const connectionData = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD,
    database: 'welbex_test'
})

// Создаем таблицу

const sql = `create table if not exists test_table(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    date DATE,
    title VARCHAR(255),
    amount INT,
    distance INT 
)`

connectionData.query(sql, function (err) {
    if (err) console.log('Ошибка при создании таблицы', err)
    else ('Таблица создана')
})

//-------------------------Заполнение таблицы данными-----------------------//
// После первого запуска можно удалить или закомментировать, чтобы каждый раз при запуске сервера не заполнять таблицу

// connectionData.end()

// const dataArray = [
//     {
//         date: '1958-01-01',
//         title: 'Санкт-Петербург',
//         amount: 1,
//         distance: 8,
//     },
//     {
//         date: '1999-02-12',
//         title: 'Сочи',
//         amount: 4,
//         distance: 10,
//     },
//     {
//         date: '2002-11-05',
//         title: 'Калининград',
//         amount: 10,
//         distance: 5,
//     },
//     {
//         date: '1960-09-23',
//         title: 'Волгоград',
//         amount: 30,
//         distance: 22,
//     },
//     {
//         date: '2013-10-25',
//         title: 'Казань',
//         amount: 2,
//         distance: 109,
//     },
//     {
//         date: '1989-03-13',
//         title: 'Владивосток',
//         amount: 90,
//         distance: 12,
//     },
//     {
//         date: '2005-03-18',
//         title: 'Краснодар',
//         amount: 30,
//         distance: 22,
//     },
//     {
//         date: '1994-02-21',
//         title: 'Ставрополь',
//         amount: 10,
//         distance: 222,
//     },
//     {
//         date: '1978-02-17',
//         title: 'Томск',
//         amount: 15,
//         distance: 204,
//     },
//     {
//         date: '2016-03-03',
//         title: 'Туапсе',
//         amount: 19,
//         distance: 107,
//     }
// ]

// const insertSql = `insert into test_table(date, title, amount, distance) values(?, ?, ?, ?);`

// for (let i = 0; i < dataArray.length; i++) {
//     connectionData.query(insertSql, [dataArray[i].date, dataArray[i].title, dataArray[i].amount, dataArray[i].distance])
// }

//--------------------------------------------------------------------------------------------------------------------------------//

module.exports = connectionData.promise()