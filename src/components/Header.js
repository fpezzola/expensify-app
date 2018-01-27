import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout, startLogin } from '../actions/auth';

export const Header = ( {startLogout} ) => (
    <header>
    <h3>Expensify</h3>
    <NavLink to="/" activeClassName="is-active" exact={true}><p>Dashboard</p></NavLink>
    <NavLink to="/create" activeClassName="is-active"><p>Add Expense</p></NavLink>
    <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined,mapDispatchToProps)(Header);