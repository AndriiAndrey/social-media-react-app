import React from 'react';
import classes from './NavBar.module.css';
import {NavLink} from 'react-router-dom'

function NavBar() {
    return(
      <nav className={classes.nav}>

      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
      </div>

      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="setings" activeClassName={classes.active}>Setings</NavLink>
      </div>

    </nav>
    );
}

export default NavBar;