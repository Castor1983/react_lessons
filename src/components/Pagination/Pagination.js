import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import css from './Pagination.module.css'

const Pagination = ({totalPages,setNumberPage }) => {
    const navigate = useNavigate()
    /*const ArrTotalPages = [];
    for (let i = 1; i <= 15; i++) {
        ArrTotalPages.push(i)
    }*/
    return (
        <div className={css.Pagination}>
            {[...Array(15)].map((button,number) => {
                number += 1

            return (
               <button key={number} onClick={()=> {
                   navigate(`/movieslist/page/${number}`)
                   setNumberPage(number)
               } }>
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