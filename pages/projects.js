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


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Projets
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
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
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
                            <DesktopMacIcon color="secondary"/> MES PROJETS
                        </Typography>
                        <Typography variant="p" align="center" style={{ color: '#919090' }} paragraph>
                            Les différents projets que j'ai réalisé
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={2}>
                        <Grid item  xs={12} sm={6} md={4}>
                                <Card className={classes.card} style={{ backgroundColor: '#152133' }}>
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
                                    <Typography gutterBottom variant="h6" component="h2" color="secondary">
                                        Ministère de la Communication et de la Culture
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
            </motion.main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}