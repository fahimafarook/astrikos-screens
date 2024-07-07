import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/common.css'

function PaginationControl(props) {
  const [startCount, setStartCount] = useState(parseInt(props.startCount));
  const [perPage, setPerPage] = useState(parseInt(props.perPage));
  const [endCount, setEndCount] = useState(parseInt(props.startCount) + parseInt(props.perPage) - 1);
  const [totalCount, setTotalCount] = useState(parseInt(props.totalCount));
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);

  const nextPage = () => {
    if(endCount < totalCount) {
      setEndCount(curr => { 
        let newendCount = curr + perPage <= totalCount ? curr + perPage : totalCount;
        setStartCount(curr + 1);
        setDisableNext(newendCount === totalCount)
        setDisablePrev(false);
        return newendCount;
      });
    }
  }

  const prevPage = () => {
    if(startCount > 0) {
      setStartCount(curr => { 
        let newstartCount = curr - perPage > 0 ? curr - perPage : 1;
        setEndCount(newstartCount + perPage - 1);
        setDisableNext(false)
        setDisablePrev(newstartCount === 1);
        return newstartCount;
      });
    }
  }

  useEffect(() => {
    props.onPageChange && props.onPageChange(parseInt((startCount / perPage) + 1));
  }, [startCount])

  return (
    <div className={`pagination-container-${props.size}`}>
      <div className={`pagination-text-${props.size}`}>{startCount} - {endCount} of {totalCount} items</div>
      <button className={`pagination-button-${props.size} ${disablePrev ? "btn-disable" : ""}`} {...(disablePrev ? { disabled: true } : {})} onClick={()=>prevPage()}>Previous</button>
      <button className={`pagination-button-${props.size} ${disableNext ? "btn-disable" : ""}`} {...(disableNext ? { disabled: true } : {})}onClick={()=>nextPage()}>Next</button>
    </div>
  )
}

export default PaginationControl
