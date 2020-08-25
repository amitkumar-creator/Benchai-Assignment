import React from 'react'

export const Pagination = ({postPerPage, totalPosts, paginate}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
          pageNumbers.push(i);
    }
    return (
        <div>
             <nav>
                 <ul className="pagination">
                    {
                        pageNumbers.map((number, i)=>(
                            <li key={i} className="page_item">
                                <a href="#" 
                                onClick={()=>paginate(number)} 
                                className="page_link"
                                style={{margin:"10px"}}
                                >{number}</a>
                            </li>
                        ))
                    }
                 </ul>
             </nav>
        </div>
    )
}
