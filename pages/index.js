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
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Head from 'next/head';

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
    color: '#fff',
    textTransform: 'capitalize',
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
        <Head>
                <title>Niaina | Portfolio</title>
                <link rel="icon" href="/images/favicon.svg" />
            </Head>
        <>
          <Navbar/>
        </>
        <main>
          <Particles
              canvasClassName={classes.particlesCanvas}
            params={{
              particles: {
                number: {
                  value: 25,
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
              <Typography variant="h6" align="left" style={{ color: '#fff', fontWeight: 'bold' }} paragraph>
                Bonjour,
              </Typography>
              <Typography  variant="h2" align="left" style={{ color: '#fff', fontWeight: 'bold' }} paragraph>
                  <Typed
                      strings={['Je suis Niaina']}
                      typeSpeed={40}
                  />
              </Typography>
              <Typography variant="h5" align="left"  style={{ color: '#919090' }} paragraph>
                <Typed
                    strings={['Développeur Web', 'Passioné des nouvelles technologies.']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={20} justify="left">
                  <Grid item>
                    <Button
                        href="/contact"
                        variant="contained"
                        color="secondary"
                        className={classes.buttonGitHub}
                    >
                      Me contacter
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Grid>
        </main>

        <>
          <Footer/>
        </>

      </React.Fragment>
  );
}