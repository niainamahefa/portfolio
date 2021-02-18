import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {motion} from "framer-motion";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Typed from 'react-typed';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    illustration: {
        width: "65%"
    },
    buttonGitHub: {
        color: '#fff',
        textTransform: 'capitalize',
    },

    heroContent: {
        marginTop: theme.spacing(4),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    footer: {
        padding: theme.spacing(6),
    },
}));

export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Head>
                <title>Niaina | Portfolio</title>
                <link rel="icon" href="/images/favicon.svg" />
            </Head>
            <>
                <Navbar/>
            </>
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

                <Container maxWidth="md" style={{marginTop : '15%'}}>
                    <Grid container spacing={10}>
                        <Grid item xs={12} sm={7}>
                            <Typography variant="h6" align="left" style={{ color: '#fff', fontWeight: 'bold' }} paragraph>
                                Hi,
                            </Typography>
                            <Typography  variant="h2" align="left" style={{ color: '#fff', fontWeight: 'bold' }} paragraph>
                                <Typed
                                    strings={["I' m Niaina"]}
                                    typeSpeed={40}
                                />
                            </Typography>
                            <Typography variant="h5" align="left"  style={{ color: '#919090' }} paragraph>
                                <Typed
                                    strings={['Web developer', 'Passionate about new technologies.']}
                                    typeSpeed={40}
                                    backSpeed={60}
                                    loop
                                />
                            </Typography>
                            <Button
                                href="/contact"
                                variant="contained"
                                color="secondary"
                                className={classes.buttonGitHub}
                            >
                                Get in touch
                            </Button>
                            <Typography align="left" style={{marginTop: '5%'}}>
                                <Button
                                    style={{ color: '#fff'}}
                                    href="https://www.linkedin.com/in/niaina-mahefa"

                                >
                                    <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 0.9}}>
                                        <LinkedInIcon />
                                    </motion.div>
                                </Button>
                                <Button
                                    style={{ color: '#fff'}}
                                    href="https://github.com/niainamahefa"
                                >
                                    <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 0.9}}>
                                        <GitHubIcon />
                                    </motion.div>
                                </Button>
                                <Button
                                    style={{ color: '#fff'}}
                                    href="https://www.facebook.com/profile.php?id=100008458601591"
                                >
                                    <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 0.9}}>
                                        <FacebookIcon />
                                    </motion.div>
                                </Button>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <img className={classes.illustration} src="/images/dev.svg" alt="illustration" />
                        </Grid>
                    </Grid>
                </Container>
            </motion.main>

            <>
                <Footer/>
            </>

        </React.Fragment>
    );
}