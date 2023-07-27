import React from 'react';
import {NavLink} from "react-router-dom";

const Pagination = ({totalPages,setNumberPage }) => {
    /*const ArrTotalPages = [];
    for (let i = 1; i <= 15; i++) {
        ArrTotalPages.push(i)
    }*/
    return (
        <div>
            {[...Array(15)].map((button,number) => {
                number += 1

            return (
               <button key={number}>
                   <NavLink to={`/movieslist/page/${number}`} onClick={()=> setNumberPage(number)}>
                       {number}
                   </NavLink>
               </button>

            );
            })}

        </div>
    );
};

export {Pagination};