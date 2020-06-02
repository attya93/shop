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
                <NavLink to={`/product`} exact>Categire</NavLink>
            </li>
            <li>
                <NavLink to="/admin/New-product" >New Product</NavLink>
            </li>
            <li>
                <NavLink to="/auth">Auth</NavLink>
            </li>
            <li>
                <NavLink to="/cart">Cart</NavLink>
            </li>
        </ul>
    )
}
export default NavLinks;