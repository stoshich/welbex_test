import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { sliceIntoChunks } from '../../sliceIntoChunks/sliceIntoChunks'
import './Table.css'

const Table = ({ isFiltered, dataArr, sortedArr, setPagArr, pagArray, currentPage }) => {

    const [sortPagArr, setSortPagArr] = useState()

    // Разбиение массива данных на массив с массивами по 5 объектов 
    useEffect(() => {
        setSortPagArr(sliceIntoChunks(sortedArr, 5))
        setPagArr(sliceIntoChunks(dataArr, 5))
    }, [dataArr, sortedArr])

    // Функции для сортировки
    const sortTitleHandler = () => {
        setPagArr(sliceIntoChunks(dataArr.sort((a, b) => a.title.localeCompare(b.title)), 5))
        setSortPagArr(sliceIntoChunks(sortedArr.sort((a, b) => a.title.localeCompare(b.title)), 5))
    }

    const sortAmountHandler = () => {
        setPagArr(sliceIntoChunks(dataArr.sort((a, b) => a.amount - b.amount), 5))
        setSortPagArr(sliceIntoChunks(sortedArr.sort((a, b) => a.amount - b.amount), 5))
    }

    const sortDistanceHandler = () => {
        setPagArr(sliceIntoChunks(dataArr.sort((a, b) => a.distance - b.distance), 5))
        setSortPagArr(sliceIntoChunks(sortedArr.sort((a, b) => a.distance - b.distance), 5))
    }

    return (
        <div className='table__container'>
            <table className='table__body'>
                <tbody>
                    <tr><th>Дата</th>
                        <th>Название <button className='sort__button' onClick={sortTitleHandler}>▼</button></th>
                        <th>Количество <button className='sort__button' onClick={sortAmountHandler}>▼</button></th>
                        <th>Расстояние <button className='sort__button' onClick={sortDistanceHandler}>▼</button></th></tr>
                    {isFiltered ?
                        sortPagArr[currentPage - 1]?.map((obj, i) =>
                            <tr key={i}><td>{new Date(obj.date).toLocaleDateString()}</td><td>{obj.title}</td><td>{obj.amount}</td><td>{obj.distance}</td></tr>)
                        :
                        pagArray[currentPage - 1]?.map((obj, i) =>
                            <tr key={i}><td>{new Date(obj.date).toLocaleDateString()}</td><td>{obj.title}</td><td>{obj.amount}</td><td>{obj.distance}</td></tr>)}
                </tbody>
            </table>
        </div>

    )
}

export default Table