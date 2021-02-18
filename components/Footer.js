import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
      <Typography variant="body2" style={{ color: '#919090' }} align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Niaina Portfolio
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
      footer: {
    padding: theme.spacing(10),
  },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
            <footer className={classes.footer} >
                <Copyright />
            </footer>
    );
}