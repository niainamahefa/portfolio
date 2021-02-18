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
import Typed from 'react-typed';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
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
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        padding: theme.spacing(12, 0, 3),
    },
      titleContent: {
    marginTop: '8%',
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
                          <Button color="inherit" href="/skills">Compétences</Button>
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

                <Container className={classes.titleContent} maxWidth="md">
                <Typography component="h4" variant="h4" align="left" style={{ color: '#fff' }} gutterBottom>
                            <CardMembershipIcon color="secondary"/>  <Typed
                      strings={['Mes certificats']}
                      typeSpeed={70}
                  />
                        </Typography>

                        <Typography component="p" variant="h5" align="left" paragraph>
                         <span style={{ color: '#07d88b', fontSize: '130%' }}>_____________</span>
                        </Typography>
                      
                        <Typography  align="left" style={{ color: '#919090' }} paragraph>
                            Certifications SoloLearn
                        </Typography>
                    <div className={classes.gridContent}>
                        <GridList cellHeight={300} className={classes.gridList}>
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
             <>
          <Footer/>
        </>
        </React.Fragment>
    );
}