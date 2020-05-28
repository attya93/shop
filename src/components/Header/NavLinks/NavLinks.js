import React from 'react'
import { NavLink } from 'react-router-dom';

import './NavLinks.scss';
const NavLinks = (props) => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>Shop</NavLink>
            </li>
            <li>
                <NavLink to="/prod/Categ">Categire</NavLink>
            </li>
            <li>
                <NavLink to="/auth">Auth</NavLink>
            </li>
            <li>
                <NavLink to="/user/cart">Cart</NavLink>
            </li>
        </ul>
    )
}
export default NavLinks;