import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import MainHeader from '../MainHeader/MainHeader';
import NavLinks from '../NavLinks/NavLinks';
import SideDrawer from '../../SideDrawer/SideDrawer';
import BackDrop from '../../BackDrop/BackDrop';


import './Main.navigation.scss';

const MainNavigation = (props) => {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    const toggleDrawer = () => {
        setIsOpenDrawer(!isOpenDrawer);
    }
    const closeDrawer = () => {
        setIsOpenDrawer(false);
    }
    return (
        <>
            {isOpenDrawer && <BackDrop onClick={closeDrawer} />}
            {isOpenDrawer && <SideDrawer>
                <nav className="main-nav__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>}
            <MainHeader>
                <button className="main-nav__menu-btn" onClick={toggleDrawer}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-nav__title">
                    <Link to="/" >Shop</Link>
                </h1>
                <nav className="main-nav__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </>
    )
}

export default MainNavigation
