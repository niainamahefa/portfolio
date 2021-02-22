import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Container from '@material-ui/core/Container';
import InfoIcon from '@material-ui/icons/Info';
import Typed from 'react-typed';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';



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
    width: theme.spacing(25),
    height: theme.spacing(25),
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

  cardGrid: {
        marginTop: '8%',
        marginBottom: theme.spacing(2),
    },
    card: {
        width: '100%',
        display: 'grid',
        flexDirection: 'column',
        padding: theme.spacing(1),
    },
    cardContent: {
        flexGrow: 1,
    },
    skillsImage: {
    width: 50,
    height: 50,
  },
  imgSkills: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  progressbar: {
    width: '100%',
  },

 ImgCertif: {
    width: '100%',
  },
  certImages: {
    width: 2,
    height: 2,
  },

    footer: {
      padding: theme.spacing(6),
    },
}));


export default function Contact() {
   const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline />
        <Head>
                <title>Contact</title>
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
          <Container className={classes.titleContent} maxWidth="md" > 
            <Typography component="h4" variant="h4" align="left" style={{ color: '#fff' }} gutterBottom>
                              <ContactPhoneIcon color="secondary"/>  <Typed
                        strings={['Get in touch']}
                        typeSpeed={70}
                    />

            </Typography>

            <Typography component="p" variant="h5" align="left" paragraph>
              <span style={{ color: '#07d88b'}}>__________</span>
            </Typography>

            <Typography align="left" style={{ color: '#919090' }} paragraph>
                For any questions, do not hesitate to contact me.
            </Typography>

            <div className={classes.root}>
            <Paper className={classes.paper} style={{ backgroundColor: '#152133' }}>
            <Container maxWidth="sm">
             <form name="contact" method="POST">
              <input type="hidden" name="form-name" value="contact" />
                <Grid container spacing={3} style={{ marginTop : '3%'}}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      style={{ backgroundColor: '#334560' }}
                      required
                      type="text"
                      id="name"
                      name="name"
                      label="Name"
                      variant="outlined"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                    style={{ backgroundColor: '#334560' }}
                      required
                      type="email"
                      id="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                    style={{ backgroundColor: '#334560' }}
                      type="text"
                      id="message"
                      name="message"
                      label="Message"
                      variant="outlined"
                      fullWidth
                      autoComplete="shipping address-line2"
                    />
                  </Grid>
                </Grid>
          
                  <Button
                    type ="submit"
                    style={{ color: '#fff', marginTop: '3%' }}
                    variant="contained"
                    color="secondary"
                    className={classes.buttonSend}
                    startIcon={<SendIcon />}
                 >
                Envoyer
                </Button>
                </form>
                </Container>
            </Paper>
          </div>
          </Container>
        </motion.main>
    </React.Fragment>
  );
}