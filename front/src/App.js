import './App.css';
import { useEffect, useState } from 'react'
import { getTableData } from './getTableData/getTableData';
import Filter from './components/filter/Filter';
import Table from './components/table/Table';
import Pagination from './components/pagination/Pagination';

function App() {

  const [dataArr, setDataArr] = useState([]) // массив со всеми данными

  const [isFiltered, setIsFiltered] = useState(false)
  const [sortedArr, setSortedArr] = useState([]) // массив после фильтрации
  const [pagArray, setPagArray] = useState([]) // массив для пагинации

  const [currentPage, setCurrentPage] = useState(1)
  const [pagesQty, setPagesQty] = useState()
  const pagesArr = [...new Array(pagesQty)].map((_, i) => i + 1) // массив с номерами страниц

  // Получение данных
  useEffect(() => {
    getTableData().then(data => {
      setDataArr(data)
    })
  }, [])

  // Расчет кол-ва страниц при фильтрации
  useEffect(() => {
    if (isFiltered) {
      setPagesQty(Math.ceil(sortedArr.length / 5))
      setCurrentPage(1)
    }
  }, [sortedArr])

  // Расчет кол-ва страниц при получении данных
  useEffect(() => {
    setPagesQty(Math.ceil(dataArr.length / 5))
  }, [dataArr])

  return (
    <div className='wrapper'>
      <Filter
        dataArr={dataArr}
        setSortedArr={setSortedArr}
        setIsFiltered={setIsFiltered}
        currentPage={currentPage}
        setPagesQty={setPagesQty}
        sortedArr={sortedArr} />
      <Table
        dataArr={dataArr}
        currentPage={currentPage}
        pagArray={pagArray}
        setPagArr={setPagArray}
        sortedArr={sortedArr}
        isFiltered={isFiltered} />
      <Pagination
        pages={pagesArr}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
