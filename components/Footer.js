import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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