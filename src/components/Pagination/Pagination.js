import React from 'react';
import {NavLink} from "react-router-dom";

const Pagination = ({totalPages,setNumberPage }) => {
    const ArrTotalPages = [];
    for (let i = 1; i <= 15; i++) {
        ArrTotalPages.push(i)
    }
    return (
        <div>
            {ArrTotalPages.map(number => (
               <button>
                   <NavLink to={`/movieslist/page/${number}`} onClick={()=> setNumberPage(number)}>

                       {number}
                   </NavLink>
               </button>

            ))}

        </div>
    );
};

export {Pagination};