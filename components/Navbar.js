import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';

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
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <Button href="/"><img src="/images/favicon.png" alt=""/></Button>
                        </Typography>
                        <Button color="inherit" href="/about">A propos</Button>
                      <Button color="inherit" href="/skills">Compétences</Button>
                      <Button color="inherit" href="/projects">Projets</Button>
                      <Button color="inherit" href="/certificates">Certifications</Button>
                      <Button color="inherit" href="/contact">Contact</Button>
                    </Toolbar>
            </AppBar>
        </div>
    );
}