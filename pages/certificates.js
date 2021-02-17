import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { motion } from 'framer-motion'
import InfoIcon from '@material-ui/icons/Info';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import {GridList, GridListTile, GridListTileBar, ListSubheader} from "@material-ui/core";
import CardMembershipIcon from '@material-ui/icons/CardMembership';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Certificats
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
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        padding: theme.spacing(12, 0, 3),
    },

    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        backgroundColor: theme.palette.background.secondary,
        height: '100%',
        width: '100%',
        display: 'grid',
        flexDirection: 'column',
        padding: theme.spacing(3),
    },
    cardContent: {
        flexGrow: 1,
    },
    gridContent: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        width: 500,
        height: 450,
    },
    footer: {
        padding: theme.spacing(6),
    },
}));


export default function Projects() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.root}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <Button href="/"><img src="/images/favicon.png" alt=""/></Button>
                        </Typography>
                        <Button color="inherit" href="/about">A propos</Button>
                        <Button color="inherit" href="/projects">Projets</Button>
                        <Button color="inherit" href="/certificates">Certifications</Button>
                        <Button color="inherit" href="/contact">Contact</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <motion.main initial ="hidden" animate="visible" variants= {{
                hidden: {
                    scale: .8,
                    opacity: 0
                },

                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: .4
                    }
                }
            }}>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h4" variant="h4" align="center" style={{ color: '#fff' }} gutterBottom>
                            <CardMembershipIcon color="secondary" /> MES CERTIFICATS
                        </Typography>
                        <Typography variant="p" align="center" style={{ color: '#919090' }} paragraph>
                            Certifications SoloLearn
                        </Typography>
                    </Container>
                </div>

                <Container>
                    <div className={classes.gridContent}>
                        <GridList cellHeight={180} className={classes.gridList}>
                            <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
                                <ListSubheader component="div">December</ListSubheader>
                            </GridListTile>
                            <GridListTile>
                                <img src="https://www.sololearn.com/Certificate/1059-15978578/jpg" alt="" />
                                <GridListTileBar
                                    title=""
                                    subtitle={<span>by: </span>}
                                    actionIcon={
                                        <IconButton aria-label="" className={classes.icon}>
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                            <GridListTile>
                                <img src="https://www.sololearn.com/Certificate/1068-15978578/jpg" alt="" />
                                <GridListTileBar
                                    title=""
                                    subtitle={<span>by: </span>}
                                actionIcon={
                                <IconButton aria-label="" className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                            }
                                />
                            </GridListTile>
                            <GridListTile>
                                <img src="https://www.sololearn.com/Certificate/1073-15978578/jpg" alt="" />
                                <GridListTileBar
                                    title=""
                                    subtitle={<span>by: </span>}
                                actionIcon={
                                <IconButton aria-label="" className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                            }
                                />
                            </GridListTile>
                            <GridListTile>
                                <img src="" alt="" />
                                <GridListTileBar
                                    title=""
                                    subtitle={<span>by: </span>}
                                actionIcon={
                                <IconButton aria-label="" className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                            }
                                />
                            </GridListTile>
                            <GridListTile>
                                <img src="" alt="" />
                                <GridListTileBar
                                    title=""
                                    subtitle={<span>by: </span>}
                                    actionIcon={
                                        <IconButton aria-label="" className={classes.icon}>
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                            <GridListTile>
                                <img src="" alt="" />
                                <GridListTileBar
                                    title=""
                                    subtitle={<span>by: </span>}
                                    actionIcon={
                                        <IconButton aria-label="" className={classes.icon}>
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                            <GridListTile>
                                <img src="" alt="" />
                                <GridListTileBar
                                    title=""
                                    subtitle={<span>by: </span>}
                                    actionIcon={
                                        <IconButton aria-label="" className={classes.icon}>
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                            <GridListTile>
                                <img src="" alt="" />
                                <GridListTileBar
                                    title=""
                                    subtitle={<span>by: </span>}
                                    actionIcon={
                                        <IconButton aria-label="" className={classes.icon}>
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        </GridList>
                    </div>
                </Container>
            </motion.main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}