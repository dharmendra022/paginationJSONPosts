import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const PaginationMian = ({postPerPage,totalPost,paginate}) => {
    const pageNumber=[];
    for(let i=1;i<=Math.ceil(totalPost/postPerPage);i++){
        pageNumber.push(i)
    }
  return (
    <nav>
        <ul className='pagination'>
            {pageNumber.map(number=>{
                <li key={number} className='page-item'>
                    <a  onClick={() => paginate(number)} href="" className='page-link'>
                        {number}
                    </a>

                </li>
            })}

        </ul>
      
    </nav>
  )
}

export default PaginationMian
