import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from 'react-icons';
import AddDayIcon from 'react-icons';
import ListDaysIcon from 'react-icons';

export const Nav = () => (
    <nav className="nav">
        <Link to="/">
            <HomeIcon />
        </Link>
        <Link to="/add">
            <AddDayIcon />
        </Link>
        <Link to="/list">
            <ListDaysIcon />
        </Link>
    </nav>
)