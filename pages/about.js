import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { motion } from 'framer-motion'
import LinkIcon from '@material-ui/icons/Link';
import InfoIcon from '@material-ui/icons/Info';
import {Avatar} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import Typed from 'react-typed';
import Grid from '@material-ui/core/Grid';
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
  titleContent: {
    marginTop: '8%',
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
  avatarContent: {
   marginTop: '5%',
  },
  aboutContent: {
   marginTop: '3%',
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  buttonGitHub: {
    margin: theme.spacing(1),
  },
  buttonLinkedIn: {
    margin: theme.spacing(1),
    color:"#fff",
    backgroundColor: "#0077b5"
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
          <Container className={classes.titleContent} maxWidth="md" > 
          <Typography component="h4" variant="h4" align="left" style={{ color: '#fff' }} gutterBottom>
                            <InfoIcon color="secondary"/>  <Typed
                      strings={['A mon propos']}
                      typeSpeed={70}
                  />

                        </Typography>

                        <Typography component="p" variant="h5" align="left" paragraph>
                         <span style={{ color: '#07d88b', fontSize: '130%' }}>_____________</span>
                        </Typography>

                        <Typography align="left" style={{ color: '#919090' }} paragraph>
                          
                        </Typography>

            <Container maxWidth ="small">
            <div className={classes.avatarContent} align="left">
              <Avatar alt="Avatar" src="/images/avatar.jpg" className={classes.avatar} />
            </div>
            <div className={classes.aboutContent} align="left" style={{ color: '#919090' }}>
              <Typography variant="body1" gutterBottom>
                Je m'appelle <span style={{ color: '#07d88b', fontWeight: 'bold' }}>Andriamahefa Lovaniaina</span> , je vis à Madagascar.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Je suis un étudiant en informatique spécialisé dans le
                développement des applications web .
              </Typography>
              <Typography variant="body1" gutterBottom>
                Passionné par le développement web, j'aime expérimenter,
                découvrir et apprendre des nouvelles technologies.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Dans ce portfolio que j'ai réalisé, je vais vous présenter mes compétences , ainsi que les
                projets que j'ai réalisé.
              </Typography>
           
                <Grid container spacing={20} justify="left">
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
          </Container>
        </motion.main>
       
        <>
          <Footer/>
        </>

      </React.Fragment>
  );
}