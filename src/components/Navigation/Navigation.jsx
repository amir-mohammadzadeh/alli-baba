import React from 'react'
import './Navigation.css'// => Code 05
import { NavLink } from 'react-router'

const Navigation = () => {
    return (
        <nav className="container navbar_05">
            <ul className="nav-content_05">
                <li className="item_n05">
                    <NavLink to="category">
                        دسته بندی ها
                    </NavLink>
                </li>
                <li className="item_n05">
                    برند ها
                </li>
                <li className="item_n05">
                    وبلاگ
                </li>
                <li className="item_n05">
                    صفحه اصل
                </li>
            </ul>
        </nav>
    )
}

export default Navigation