import React from 'react'

import MainNavigation from '../components/Header/MainNavigation/MainNavigation';
const Layout = props => {
    return (
        <React.Fragment>
            <MainNavigation />
            <div>
                {props.children}
            </div>

        </React.Fragment>
    )
}


export default Layout
