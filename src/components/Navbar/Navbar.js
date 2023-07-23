import React from 'react';
import {Link} from "react-router-dom";

import style from './Navbar.module.css'
import {AppRoutes} from "../../routing/AppRoutes";

const Navbar = () => {
    const buttons = [
        {
            Label: 'Main',
            route: AppRoutes.MAIN
        },
        {
            Label: 'Todos',
            route: AppRoutes.TODOS
        },
        {
            Label: 'Albums',
            route: AppRoutes.ALBUMS
        },
        {
            Label: 'Comments',
            route: AppRoutes.COMMENTS
        },
    ]
    return (
        <div className={style.navbar}>
            {buttons.map((btn, idx) =>
                <button>
                    <Link key={idx} to={btn.route} style={{textDecoration: 'none', color: 'yellow'}}>
                        {btn.Label}
                    </Link>
                </button>
            )}
        </div>
    );
};

export {Navbar};