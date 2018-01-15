import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => (
    <header>
    <h3>Expensify</h3>
    <NavLink to="/" activeClassName="is-active" exact={true}><p>Dashboard</p></NavLink>
    <NavLink to="/create" activeClassName="is-active"><p>Add Expensify</p></NavLink>
    <NavLink to="/help" activeClassName="is-active"><p>Help</p></NavLink>


    </header>
);

export default Header;