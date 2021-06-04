import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { motion } from 'framer-motion'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import Typed from 'react-typed';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Head from 'next/head';



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
    cardGrid: {
        marginTop: '8%',
        marginBottom: theme.spacing(5),
    },
    card: {
        borderRadius: '2%',
        marginTop: '10%',
        height: '100%',
        width: '100%',
        display: 'grid',
        flexDirection: 'column',
        padding: theme.spacing(2),
    },
    cardContent: {
        flexGrow: 1,
    },
    image: {
        width: 10,
        height: 10,
    },
    img: {
        marginTop :'4%',
        justifyContent: 'space-between',
        maxWidth: '15%',
        maxHeight: '15%',
    },
}));


export default function Projects() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Head>
                <title>Projects</title>
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
                <Container className={classes.cardGrid} maxWidth="md">
                    <Typography component="h4" variant="h4" align="left" style={{ color: '#fff' }} gutterBottom>
                        <DesktopMacIcon color="secondary"/>  <Typed
                        strings={['Projects']}
                        typeSpeed={70}
                    />
                    </Typography>

                    <Typography component="p" variant="h5" align="left" paragraph>
                        <span style={{ color: '#07d88b'}}>__________</span>
                    </Typography>

                    <Typography  align="left" style={{ color: '#919090' }} paragraph>
                        Source codes are available on GitHub.
                    </Typography>
                    {/* End hero unit */}
                    <Grid container spacing={2}>
                        <Grid item  xs={12} sm={6} md={4}>
                            <Card className={classes.card} style={{ backgroundColor: '#0d1727' }} variant="outlined">
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h6" component="h2" color="secondary">
                                       Fototra
                                    </Typography>
                                    <Typography gutterBottom style={{ color: '#fff' }}>
                                       Webiste for fototra enterprise.
                                    </Typography>
                                    <Typography style={{ color: '#919090' }}>
                                        <img className={classes.img} src="/images/skills/symfony.png" />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://github.com/niainamahefa/sf5-fototra">
                                        <GitHubIcon style={{ color: '#EE4437' }} />
                                    </Button>
                                    <Button size="small" color="primary" href="https://fototra.herokuapp.com">
                                        <LinkIcon style={{ color: '#EE4437' }} />
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
                            <Card className={classes.card} style={{ backgroundColor: '#0d1727' }} variant="outlined">
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h6" component="h2" color="secondary">
                                        Covid-19 tracking
                                    </Typography>
                                    <Typography gutterBottom style={{ color: '#fff' }}>
                                        Personal project using "covid19api" to track coronavirus.
                                    </Typography>
                                    <Typography style={{ color: '#919090' }}>
                                        <img className={classes.img} src="/images/skills/symfony.png" />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://github.com/niainamahefa/sf5-covid-tracking">
                                        <GitHubIcon style={{ color: '#EE4437' }} />
                                    </Button>
                                    <Button size="small" color="primary" href="https://niaina-covid-tracking.herokuapp.com">
                                        <LinkIcon style={{ color: '#EE4437' }} />
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
                            <Card className={classes.card} style={{ backgroundColor: '#0d1727' }} variant="outlined">
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h6" component="h2" color="secondary">
                                        Portfolio
                                    </Typography>
                                    <Typography gutterBottom style={{ color: '#fff' }}>
                                        My personal portfolio.
                                    </Typography>
                                    <Typography style={{ color: '#919090' }}>
                                        <img className={classes.img} src="/images/skills/react.png" />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://github.com/niainamahefa/portfolio">
                                        <GitHubIcon style={{ color: '#EE4437' }} />
                                    </Button>
                                    <Button size="small" color="primary" href="https://niaina.netlify.app">
                                        <LinkIcon style={{ color: '#EE4437' }} />
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
                            <Card className={classes.card} style={{ backgroundColor: '#0d1727' }}>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h6"  color="secondary">
                                        Ministry of Communication
                                    </Typography>
                                    <Typography gutterBottom style={{ color: '#fff' }}>
                                        Website for Arts and Artistic Publishing.
                                    </Typography>
                                    <Typography style={{ color: '#919090' }}>
                                        <img className={classes.img} src="/images/skills/symfony.png" />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href="http://dapa.mcc.gov.mg">
                                        <LinkIcon style={{ color: '#EE4437' }} />
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
                            <Card className={classes.card} style={{ backgroundColor: '#0d1727' }}>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h6" component="h2" color="secondary">
                                        E-Vidy
                                    </Typography>
                                    <Typography gutterBottom style={{ color: '#fff' }}>
                                        E-commerce website.
                                    </Typography>
                                    <Typography style={{ color: '#919090' }}>
                                        <img className={classes.img} src="/images/skills/wordpress.png" />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://github.com/niainamahefa/wordpress-evidy">
                                        <GitHubIcon style={{ color: '#EE4437' }} />
                                    </Button>
                                    <Button size="small" color="primary">
                                        <LinkIcon style={{ color: '#EE4437' }} />
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
                            <Card className={classes.card} style={{ backgroundColor: '#0d1727' }}>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h6" component="h2" color="secondary">
                                        Medical Assistance and Health Exploration for All
                                    </Typography>
                                    <Typography gutterBottom style={{ color: '#fff' }}>
                                        Medical practice management application.
                                    </Typography>
                                    <Typography style={{ color: '#919090' }}>
                                        <img className={classes.img} src="/images/skills/symfony.png" />
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
                            <Card className={classes.card} style={{ backgroundColor: '#0d1727' }}>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h6" component="h2" color="secondary">
                                        Qr Code Generator
                                    </Typography>
                                    <Typography gutterBottom style={{ color: '#fff' }}>
                                        Mobile application to create and scan Qr Code.
                                    </Typography>
                                    <Typography style={{ color: '#919090' }}>
                                        <img className={classes.img} src="/images/skills/flutter.png" />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://github.com/niainamahefa/flutter-qrcode">
                                        <GitHubIcon style={{ color: '#EE4437' }} />
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
                            <Card className={classes.card} style={{ backgroundColor: '#0d1727' }}>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h6" component="h2" color="secondary">
                                        Sekoliko
                                    </Typography>
                                    <Typography gutterBottom style={{ color: '#fff' }}>
                                        School management web application.
                                    </Typography>
                                    <Typography style={{ color: '#919090' }}>
                                        <img className={classes.img} src="/images/skills/java.png" />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://github.com/niainamahefa/j2ee-sekoliko">
                                        <GitHubIcon style={{ color: '#EE4437' }} />
                                    </Button>
                                </CardActions>
                            </Card>
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
