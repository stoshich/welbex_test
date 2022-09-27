import React from 'react'
import './Pagination.css'

const Pagination = ({ pages, currentPage, setCurrentPage }) => {

    const onPageClick = (currentPage) => {
        setCurrentPage(currentPage)
    }

    return (
        <div className='pagination__block'>
            {pages.map(p => <button onClick={() => onPageClick(p)} className={p === currentPage ? 'active' : ''} key={p}>{p}</button>)}
        </div>
    )
}

export default Pagination