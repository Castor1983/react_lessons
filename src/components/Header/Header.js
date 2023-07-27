import React from 'react';
import css from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AppRoutes} from "../../routing/AppRoutes";
const Header = () => {
    const links = [
        {
            Label: 'Main',
            route: AppRoutes.MAIN
        },
        {
            Label: 'Movies',
            route: AppRoutes.MOVIESLIST
        },
        {
            Label: 'Genres',
            route: AppRoutes.ALBUMS
        },
        {
            Label: 'Comments',
            route: AppRoutes.COMMENTS
        },
    ]
    return (
        <div className={css.Header}>
            {links.map((lnk, idx) =>

                    <NavLink key={idx} to={lnk.route}>
                        {lnk.Label}
                    </NavLink>

            )}
        </div>
    );
};

export {Header};