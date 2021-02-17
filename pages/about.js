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
  aboutContent: {
    width: '100%',
    marginTop: '5%'
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
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
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
                <InfoIcon color="secondary"/> A MON PROPOS
              </Typography>
              <Typography variant="p" align="center" style={{ color: '#919090' }} paragraph>

              </Typography>
            </Container>
          </div>
          <Container maxWidth="sm">
            <div className={classes.avatarContent} align="center">
              <Avatar alt="Avatar" src="/images/avatar.jpg" className={classes.avatar} />
            </div>
            <div className={classes.aboutContent} align="center" style={{ color: '#919090' }}>
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
              <Typography variant="body1" gutterBottom>
                Pour toute question, n’hésitez pas à me contacter.
              </Typography>
              <div align="center" style={{ marginTop: '5%' }}>
                <Button size="large"  href="https://github.com/niainamahefa">
                  <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 0.9}}><GitHubIcon style={{ color: '#EE4437' }} /></motion.div>
                </Button>
                <Button size="large" href="https://github.com/niainamahefa">
                  <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 0.9}}> <LinkedInIcon style={{ color: '#EE4437' }}/></motion.div>
                </Button>
                <Button size="large"  href="https://github.com/niainamahefa">
                  <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 0.9}}><FacebookIcon style={{ color: '#EE4437' }}/></motion.div>
                </Button>
              </div>
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