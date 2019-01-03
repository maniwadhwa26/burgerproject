import React from  'react';
import classes from './Toolbar.css';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
const toolbar = (props) => (

    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo height="80%"/>
        <div>Logo</div>
        <nav className={classes.Nav}>
            <NavigationItems />
        </nav>
    </header>

);


export default toolbar;