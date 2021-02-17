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
import {motion} from "framer-motion";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Typed from 'react-typed';
import Particles from 'react-particles-js';

function Copyright() {
  return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          A propos
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
  particlesCanvas: {
    position:"absolute",
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
  buttonGitHub: {
    margin: theme.spacing(1),
  },
  buttonLinkedIn: {
    margin: theme.spacing(1),
    color:"#fff",
    backgroundColor: "#0077b5"
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
        <main>
          <Particles
              canvasClassName={classes.particlesCanvas}
            params={{
              particles: {
                number: {
                  value: 45,
                  density: {
                    enable: true,
                    value_area:900
                  }
                },
                shape: {
                  type: "circle",
                  strole: {
                    width: 1,
                    color: "#fff"
                  }
                },
                size: {
                  value: 5,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 10,
                    size_min: 0.1,
                    sync: false
                  }
                }
              }
            }}
          />
          {/* Hero unit */}
          <Grid className={classes.heroContent} container
               alignItems="center"
               justify="center"
               style={{ minHeight: '100vh' }}>
            <Container maxWidth="md">
              <Typography variant="h6" align="center" style={{ color: '#fff', fontWeight: 'bold' }} paragraph>
                Bonjour,
              </Typography>
              <Typography component="h1" variant="h1" align="center" style={{ color: '#07d88b', fontWeight: 'bold' }} gutterBottom>
                  <Typed
                      strings={['Je suis Niaina']}
                      typeSpeed={40}
                  />
              </Typography>
              <Typography variant="h4" align="center"  style={{ color: '#919090' }} paragraph>
                <Typed
                    strings={['Développeur Web', 'Passioné des nouvelles technologies.']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={20} justify="center">
                  <Grid item>
                    <Button
                        href="https://github.com/niainamahefa"
                        variant="contained"
                        color="default"
                        className={classes.buttonGitHub}
                        startIcon={<GitHubIcon />}
                    >
                      GitHub
                    </Button>
                    <Button
                        href="https://www.linkedin.com/in/niaina-mahefa/"
                        variant="contained"
                        className={classes.buttonLinkedIn}
                        startIcon={<LinkedInIcon />}
                    >
                      LinkedIn
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Grid>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment>
  );
}