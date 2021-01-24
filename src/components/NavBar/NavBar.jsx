import React from 'react';
import {
    AppBar, Badge, IconButton, Toolbar, Typography,
} from '@material-ui/core';
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import useStyles from './Style';

const NavBar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Link to="/" className={classes.title}>
                    <Typography variant="h6">
                        Mi aerolinea
                    </Typography>
                </Link>
                <Link to="/reservations" className={classes.link}>
                    <IconButton aria-label="cart" color="inherit">
                        <Badge color="secondary" badgeContent={3}>
                            <ShoppingBasket />
                        </Badge>
                    </IconButton>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
