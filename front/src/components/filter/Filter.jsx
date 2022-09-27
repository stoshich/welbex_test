import React, { useState } from 'react'
import { useEffect } from 'react'
import './Filter.css'
import { sliceIntoChunks } from '../../sliceIntoChunks/sliceIntoChunks'

const Filter = ({ dataArr, sortedArr, setSortedArr, setIsFiltered, currentPage, setPagesQty }) => {

    // Компонент фильтрации с двумя выпадающими списками и текстовым полем

    const [column, setColumn] = useState('')
    const [sortType, setSortType] = useState('')
    const [inputValue, setInputValue] = useState('')

    // Фильтрация по разным колонкам
    // С помощью switch case сортируем массив в зависимости от условия

    useEffect(() => {
        if (column === 'byAmount') {
            switch (sortType) {
                case 'equals':
                    setSortedArr(dataArr.filter(obj => obj.amount === Number(inputValue)))
                    break
                case 'contains':
                    setSortedArr(dataArr.filter(obj => obj.amount.toString().includes(inputValue)))
                    break
                case 'more':
                    setSortedArr(dataArr.filter(obj => obj.amount > Number(inputValue)))
                    break
                case 'less':
                    setSortedArr(dataArr.filter(obj => obj.amount < Number(inputValue)))
                    break
            }
            setIsFiltered(true)
        }
        if (column === 'byDistance') {
            switch (sortType) {
                case 'equals':
                    setSortedArr(dataArr.filter(obj => obj.distance === Number(inputValue)))
                    break
                case 'contains':
                    setSortedArr(dataArr.filter(obj => obj.distance.toString().includes(inputValue)))
                    break
                case 'more':
                    setSortedArr(dataArr.filter(obj => obj.distance > Number(inputValue)))
                    break
                case 'less':
                    setSortedArr(dataArr.filter(obj => obj.distance < Number(inputValue)))
                    break
            }
            setIsFiltered(true)
        }
        if (column === 'byTitle') {
            switch (sortType) {
                case 'equals':
                    setSortedArr(dataArr.filter(obj => obj.title.toLowerCase() === inputValue.toLowerCase()))
                    break
                case 'contains':
                    setSortedArr(dataArr.filter(obj => obj.title.toLowerCase().includes(inputValue.toLowerCase())))
                    break
                case 'more':
                    setSortedArr(dataArr.filter(obj => obj.title.toLowerCase() > inputValue.toLowerCase()))
                    break
                case 'less':
                    setSortedArr(dataArr.filter(obj => obj.title.toLowerCase() < inputValue.toLowerCase()))
                    break
            }
            setIsFiltered(true)
        }
        if (!column || !sortType || !inputValue) {
            setIsFiltered(false)
            setPagesQty(Math.ceil(dataArr.length / 5))
        }
    }, [column, sortType, inputValue])

    return (
        <div className='filter'>
            <select value={column} onChange={(e) => setColumn(e.target.value)}>
                <option value=''>Выбор колонки</option>
                <option value='byTitle'>По названию</option>
                <option value='byAmount'>По количеству</option>
                <option value='byDistance'>По расстоянию</option>
            </select>
            <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
                <option value=''>Выбор условия</option>
                <option value='equals'>Равно</option>
                <option value='contains'>Содержит</option>
                <option value='more'>Больше</option>
                <option value='less'>Меньше</option>
            </select>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </div>
    )
}

export default Filter