import React from  'react';
import classes from './Toolbar.css';
import Logo from '../../../components/Logo/Logo';

const toolbar = (props) => (

    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo />
        <div>Logo</div>
        <nav className={classes.Nav}>
            
        </nav>
    </header>

);


export default toolbar;