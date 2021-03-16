import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { motion } from 'framer-motion'
import InfoIcon from '@material-ui/icons/Info';
import {Avatar} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import Typed from 'react-typed';
import Grid from '@material-ui/core/Grid';
import Footer from '../components/Footer.js';
import ButtonBase from '@material-ui/core/ButtonBase';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Head from 'next/head';
import Navbar from '../components/Navbar.js';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import CodeIcon from '@material-ui/icons/Code';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import GradeIcon from '@material-ui/icons/Grade';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import BarChartIcon from '@material-ui/icons/BarChart';
import SportsRugbyIcon from '@material-ui/icons/SportsRugby';
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    titleContent: {
        marginTop: '8%',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    buttonGitHub: {
        margin: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(5),
        margin: 'auto',
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },

    skillsTitle: {
        marginTop: '5%',
    },
    button: {
        margin: theme.spacing(1),
    },
    hobby: {
        margin: theme.spacing(1),
    },

    cardGrid: {
        marginTop: '8%',
        marginBottom: theme.spacing(2),
    },
    card: {
        borderRadius: '4%',
        width: '100%',
        display: 'grid',
        flexDirection: 'column',
        padding: theme.spacing(1),
    },
    cardContent: {
        flexGrow: 1,
    },
    skillsImage: {
        width: 25,
        height: 25,
    },
    imgSkills: {

        maxWidth: '100%',
        maxHeight: '100%',
    },

    buttonLinkedIn: {
        margin: theme.spacing(1),
        color:"#fff",
        backgroundColor: "#0077b5"
    },

    buttonFacebook: {
        margin: theme.spacing(1),
        color:"#fff",
        backgroundColor: "#3b5998"
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
            <Head>
                <title>About</title>
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

                {/* A propos */}
                <Container className={classes.titleContent} maxWidth="md" >
                    <Typography component="h4" variant="h4" align="left" style={{ color: '#fff' }} gutterBottom>
                        <InfoIcon color="secondary"/>  <Typed
                        strings={['About me']}
                        typeSpeed={70}
                    />

                    </Typography>

                    <Typography component="p" variant="h5" align="left" paragraph>
                        <span style={{ color: '#07d88b'}}>__________</span>
                    </Typography>

                    <div className={classes.root} style={{marginTop: '5%'}}>

                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <div>
                                        <Avatar alt="Avatar" src="/images/avatar.jpg" className={classes.avatar} />
                                    </div>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <div style={{ color: '#919090' }}>
                                            <Typography variant="body1" gutterBottom>
                                                My name is <span style={{ color: '#07d88b', fontWeight: 'bold' }}>Andriamahefa Lovaniaina</span> , I live in Madagascar.
                                            </Typography>
                                            <Typography variant="body1" gutterBottom>
                                                Passionate about web development, I like to experiment, discover and learn new technologies.
                                            </Typography>
                                            <Typography variant="body1" gutterBottom>
                                                In this portfolio that I made, I will present my skills to you, as well as the projects that I have carried out.
                                            </Typography>
                                            <Button
                                                href="https://github.com/niainamahefa"
                                                variant="contained"
                                                color="default"
                                                className={classes.buttonGitHub}
                                                startIcon={<CloudDownloadIcon />}
                                            >
                                                Resume
                                            </Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </div>
                </Container>
            </motion.main>

            <motion.main initial ="hidden"  animate="visible" variants= {{
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
                <Container className={classes.cardGrid} maxWidth="md">
                    <Typography component="h4" variant="h4" align="left" style={{ color: '#fff' }} gutterBottom>
                        <BarChartIcon color="secondary" />  <Typed
                        strings={['Network']}
                        typeSpeed={70}
                    />
                    </Typography>

                    <Typography component="p" variant="h5" align="left" paragraph>
                        <span style={{ color: '#07d88b'}}>__________</span>
                    </Typography>
                    <Button

                        href="https://www.linkedin.com/in/niaina-mahefa"
                        variant="contained"
                        className={classes.buttonLinkedIn}
                        startIcon={<LinkedInIcon />}
                    >
                        LinkedIn
                    </Button>
                    <Button

                        href="https://github.com/niainamahefa"
                        variant="contained"
                        className={classes.button}
                        startIcon={<GitHubIcon />}
                    >
                        Github
                    </Button>
                    <Button

                        href="https://www.facebook.com/profile.php?id=100008458601591"
                        variant="contained"
                        color="default"
                        className={classes.buttonFacebook}
                        startIcon={<FacebookIcon />}
                    >
                        Facebook
                    </Button>

                </Container>
            </motion.main>

            <motion.main initial ="hidden"  animate="visible" variants= {{
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
                <Container className={classes.cardGrid} maxWidth="md">
                    <Typography component="h4" variant="h4" align="left" style={{ color: '#fff' }} gutterBottom>
                        <CodeIcon color="secondary" />  <Typed
                        strings={['Skills']}
                        typeSpeed={70}
                    />
                    </Typography>

                    <Typography component="p" variant="h5" align="left" paragraph>
                        <span style={{ color: '#07d88b'}}>__________</span>
                    </Typography>
                    <Typography className={classes.skillsTitle} align="left" style={{ color: '#eedd00'}} variant="h6" paragraph>
                        <FiberManualRecordIcon fontSize="small" /> <span style={{ color: '#fff'}}>Operating system</span>
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item  xs={12} sm={6} md={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.skillsImage}>
                                        <img className={classes.imgSkills} alt="complex" src="/images/skills/linux.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography  style={{ color: '#919090' }} gutterBottom  component="h2">
                                                Linux
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.skillsImage}>
                                        <img className={classes.imgSkills} alt="complex" src="/images/skills/windows.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography  style={{ color: '#919090' }} gutterBottom  component="h2">
                                                Windows
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Typography className={classes.skillsTitle} align="left" style={{ color: '#eedd00'}} variant="h6" paragraph>
                        <FiberManualRecordIcon fontSize="small" /> <span style={{ color: '#fff'}}>Language ​& framework</span>
                    </Typography>

                    {/* End hero unit */}
                    <Grid container spacing={2}>
                        <Grid item  xs={12} sm={6} md={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.skillsImage}>
                                        <img className={classes.imgSkills} alt="complex" src="/images/skills/php.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm={6} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography  style={{ color: '#919090' }} gutterBottom  component="h2">
                                                PHP
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.skillsImage}>
                                        <img className={classes.imgSkills} alt="complex" src="/images/skills/symfony.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography  style={{ color: '#919090' }} gutterBottom  component="h2">
                                                Symfony
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.skillsImage}>
                                        <img className={classes.imgSkills} alt="complex" src="/images/skills/laravel.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography  style={{ color: '#919090' }} gutterBottom  component="h2">
                                                Laravel
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.skillsImage}>
                                        <img className={classes.imgSkills} alt="complex" src="/images/skills/python.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography  style={{ color: '#919090' }} gutterBottom  component="h2">
                                                Python
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.skillsImage}>
                                        <img className={classes.imgSkills} alt="complex" src="/images/skills/java.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography  style={{ color: '#919090' }} gutterBottom  component="h2">
                                                Java
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.skillsImage}>
                                        <img className={classes.imgSkills} alt="complex" src="/images/skills/wordpress.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography style={{ color: '#919090' }} gutterBottom  component="h2">
                                                Wordpress
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.skillsImage}>
                                        <img className={classes.imgSkills} alt="complex" src="/images/skills/flutter.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography style={{ color: '#919090' }} gutterBottom  component="h2">
                                                Flutter
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.skillsImage}>
                                        <img className={classes.imgSkills} alt="complex" src="/images/skills/react.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography style={{ color: '#919090' }} gutterBottom  component="h2">
                                                React.js
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.skillsImage}>
                                        <img className={classes.imgSkills} alt="complex" src="/images/skills/bootstrap.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography style={{ color: '#919090' }} gutterBottom  component="h2">
                                                Bootstrap
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.skillsImage}>
                                        <img className={classes.imgSkills} alt="complex" src="/images/skills/javascript.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography style={{ color: '#919090' }} gutterBottom  component="h2">
                                                Javascript
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.skillsImage}>
                                        <img className={classes.imgSkills} alt="complex" src="/images/skills/html.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography style={{ color: '#919090' }} gutterBottom  component="h2">
                                                HTML
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.skillsImage}>
                                        <img className={classes.imgSkills} alt="complex" src="/images/skills/css.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Typography style={{ color: '#919090' }} gutterBottom  component="h2">
                                        CSS
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>

                    <Typography className={classes.skillsTitle} align="left" style={{ color: '#eedd00'}} variant="h6" paragraph>
                        <FiberManualRecordIcon fontSize="small" /> <span style={{ color: '#fff'}}>Server</span>
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item  xs={12} sm={6} md={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.skillsImage}>
                                        <img className={classes.imgSkills} alt="complex" src="/images/skills/apache.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography  style={{ color: '#919090' }} gutterBottom  component="h2">
                                                Apache
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.skillsImage}>
                                        <img className={classes.imgSkills} alt="complex" src="/images/skills/tomcat.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography  style={{ color: '#919090' }} gutterBottom  component="h2">
                                                Tomcat
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Typography className={classes.skillsTitle} align="left" style={{ color: '#eedd00'}} variant="h6" paragraph>
                        <FiberManualRecordIcon fontSize="small" /> <span style={{ color: '#fff'}}>Database</span>
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item  xs={12} sm={6} md={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.skillsImage}>
                                        <img className={classes.imgSkills} alt="complex" src="/images/skills/postgresql.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography  style={{ color: '#919090' }} gutterBottom  component="h2">
                                                PostgreSQL
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.skillsImage}>
                                        <img className={classes.imgSkills} alt="complex" src="/images/skills/mysql.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography  style={{ color: '#919090' }} gutterBottom  component="h2">
                                                MySQL
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>



                    <Typography className={classes.skillsTitle} align="left" style={{ color: '#eedd00'}} variant="h6" paragraph>
                        <FiberManualRecordIcon fontSize="small" /> <span style={{ color: '#fff'}}>Tools</span>
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item  xs={12} sm={6} md={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.skillsImage}>
                                        <img className={classes.imgSkills} alt="complex" src="/images/skills/git.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography  style={{ color: '#919090' }} gutterBottom  component="h2">
                                                Git
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.skillsImage}>
                                        <img className={classes.imgSkills} alt="complex" src="/images/skills/phpstorm.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography  style={{ color: '#919090' }} gutterBottom  component="h2">
                                                PHPStorm
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.skillsImage}>
                                        <img className={classes.imgSkills} alt="complex" src="/images/skills/webstorm.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography  style={{ color: '#919090' }} gutterBottom  component="h2">
                                                WebStorm
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.skillsImage}>
                                        <img className={classes.imgSkills} alt="complex" src="/images/skills/vscode.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography  style={{ color: '#919090' }} gutterBottom  component="h2">
                                                Visual studio code
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>


                </Container>
            </motion.main>



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
                <Container className={classes.titleContent} maxWidth="md" >
                    <Typography component="h4" variant="h4" align="left" style={{ color: '#fff' }} gutterBottom>
                        <CardMembershipIcon color="secondary" />  <Typed
                        strings={['Certificates']}
                        typeSpeed={70}
                    />
                    </Typography>

                    <Typography component="p" variant="h5" align="left" paragraph>
                        <span style={{ color: '#07d88b'}}>__________</span>
                    </Typography>

                    <Typography  align="left" style={{ color: '#EE4437' }} paragraph>

                    </Typography>
                    {/* End hero unit */}
                    <Button
                        href="https://www.sololearn.com/Certificate/1059-15978578/pdf"
                        variant="contained"
                        style={{backgroundColor: "#EE4437", color: "#fff"}}
                        className={classes.button}
                        startIcon={<CardMembershipIcon />}
                    >
                        PHP
                    </Button>
                    <Button

                        href="https://www.sololearn.com/Certificate/1068-15978578/pdf"
                        variant="contained"
                        style={{backgroundColor: "#EE4437", color: "#fff"}}
                        className={classes.button}
                        startIcon={<CardMembershipIcon />}
                    >
                        Java
                    </Button>
                    <Button

                        href="https://www.sololearn.com/Certificate/1073-15978578/pdf"
                        variant="contained"
                        style={{backgroundColor: "#EE4437", color: "#fff"}}
                        className={classes.button}
                        startIcon={<CardMembershipIcon />}
                    >
                        Python
                    </Button>
                    <Button

                        href="https://www.sololearn.com/Certificate/1060-15978578/pdf"
                        variant="contained"
                        style={{backgroundColor: "#EE4437", color: "#fff"}}
                        className={classes.button}
                        startIcon={<CardMembershipIcon />}
                    >
                        SQL
                    </Button>
                    <Button

                        href="https://www.sololearn.com/Certificate/1024-15978578/pdf"
                        variant="contained"
                        style={{backgroundColor: "#EE4437", color: "#fff"}}
                        className={classes.button}
                        startIcon={<CardMembershipIcon />}
                    >
                        JAVASCRIPT
                    </Button>
                    <Button

                        href="https://www.sololearn.com/Certificate/1082-15978578/pdf"
                        variant="contained"
                        style={{backgroundColor: "#EE4437", color: "#fff"}}
                        className={classes.button}
                        startIcon={<CardMembershipIcon />}
                    >
                        JQUERY
                    </Button>
                    <Button

                        href="https://www.sololearn.com/Certificate/1014-15978578/pdf"
                        variant="contained"
                        style={{backgroundColor: "#EE4437", color: "#fff"}}
                        className={classes.button}
                        startIcon={<CardMembershipIcon />}
                    >
                        HTML
                    </Button>
                    <Button
                        href="https://www.sololearn.com/Certificate/1023-15978578/pdf"
                        variant="contained"
                        style={{backgroundColor: "#EE4437", color: "#fff"}}
                        className={classes.button}
                        startIcon={<CardMembershipIcon />}
                    >
                        CSS
                    </Button>

                </Container>
            </motion.main>

            <>
                <Footer/>
            </>
        </React.Fragment>
    );
}