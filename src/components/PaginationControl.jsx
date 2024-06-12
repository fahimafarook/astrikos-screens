import React from 'react'
import {useState} from 'react'
import '../styles/common.css'

function PaginationControl(props) {
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(3);
  const [totalPage, setTotalPage] = useState(10);

  return (
    <div className={`pagination-container-${props.size}`}>
      <div className={`pagination-text-${props.size}`}>{startPage} - {endPage} of {totalPage} items</div>
      <button className={`pagination-button-${props.size}`}>Previous</button>
      <button className={`pagination-button-${props.size}`}>Next</button>
    </div>
  )
}

export default PaginationControl
