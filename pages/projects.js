import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
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
    cardGrid: {
        marginTop: '8%',
        marginBottom: theme.spacing(5),
    },
    card: {
        marginTop: '10%',
        backgroundColor: theme.palette.background.secondary,
        height: '105%',
        width: '105%',
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(1),
    },
    cardContent: {
        flexGrow: 1,
    },
}));


export default function Projects() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
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
                      strings={['Mes projets']}
                      typeSpeed={70}
                  />
                        </Typography>

                        <Typography component="p" variant="h5" align="left" paragraph>
                         <span style={{ color: '#07d88b', fontSize: '130%' }}>_____________</span>
                        </Typography>
                      
                        <Typography  align="left" style={{ color: '#919090' }} paragraph>
                            Les différents projets que j'ai réalisé
                        </Typography>
                    {/* End hero unit */}
                    <Container maxWidth ="md">
                    <Grid container spacing={3}>
                        <Grid item  xs={12} sm={6} md={4}>
                                <Card className={classes.card} style={{ backgroundColor: '#152133' }} variant="outlined"> 
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h6" component="h2" color="secondary">
                                            Portfolio
                                        </Typography>
                                        <Typography gutterBottom style={{ color: '#fff' }}>
                                            Mon portfolio personnel.
                                        </Typography>
                                        <Typography style={{ color: '#919090' }}>
                                            Next.js | React.js
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" href="https://github.com/niainamahefa/nextjs-portfolio">
                                            <GitHubIcon style={{ color: '#EE4437' }} />
                                        </Button>
                                        <Button size="small" color="primary">
                                            <LinkIcon style={{ color: '#EE4437' }} />
                                        </Button>
                                    </CardActions>
                                </Card>
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
                            <Card className={classes.card} style={{ backgroundColor: '#152133' }}>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h6"  color="secondary">
                                        Ministère de la Communication 
                                    </Typography>
                                    <Typography gutterBottom style={{ color: '#fff' }}>
                                        Site web pour les Arts et la Publication Artistique.
                                    </Typography>
                                    <Typography style={{ color: '#919090' }}>
                                        PHP | Symfony
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href="http://dapa.mcc.gov.mg">
                                        <GitHubIcon style={{ color: '#EE4437' }} />
                                    </Button>
                                    <Button size="small" color="primary">
                                        <LinkIcon style={{ color: '#EE4437' }} />
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
                            <Card className={classes.card} style={{ backgroundColor: '#152133' }}>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h6" component="h2" color="secondary">
                                        E-Vidy
                                    </Typography>
                                    <Typography gutterBottom style={{ color: '#fff' }}>
                                        Site e-commerce.
                                    </Typography>
                                    <Typography style={{ color: '#919090' }}>
                                        Wordpress
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
                            <Card className={classes.card} style={{ backgroundColor: '#152133' }}>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h6" component="h2" color="secondary">
                                        Medical Assistance and Health Exploration for All
                                    </Typography>
                                    <Typography gutterBottom style={{ color: '#fff' }}>
                                        Application de gestion de cabinet médical.
                                    </Typography>
                                    <Typography style={{ color: '#919090' }}>
                                        PHP | Symfony
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        <GitHubIcon style={{ color: '#EE4437' }} />
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
                            <Card className={classes.card} style={{ backgroundColor: '#152133' }}>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h6" component="h2" color="secondary">
                                        QrCode Generator
                                    </Typography>
                                    <Typography gutterBottom style={{ color: '#fff' }}>
                                        Application mobile pour créer et scanner des Qr Code.
                                    </Typography>
                                    <Typography style={{ color: '#919090' }}>
                                        Flutter
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        <GitHubIcon style={{ color: '#EE4437' }} />
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
                            <Card className={classes.card} style={{ backgroundColor: '#152133' }}>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h6" component="h2" color="secondary">
                                        Sekoliko
                                    </Typography>
                                    <Typography gutterBottom style={{ color: '#fff' }}>
                                        Application web de gestion d'école.
                                    </Typography>
                                    <Typography style={{ color: '#919090' }}>
                                        Java | JEE
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://github.com/niainamahefa/j2ee-sekoliko">
                                        <GitHubIcon style={{ color: '#EE4437' }} />
                                    </Button>
                                    <Button size="small" color="primary">
                                        <LinkIcon style={{ color: '#EE4437' }} />
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                    </Container>
                </Container>
            </motion.main>
            
             <>
          <Footer/>
        </>

        </React.Fragment>
    );
}