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
import Footer from '../components/Footer.js';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Head from 'next/head';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import Navbar from '../components/Navbar.js';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardMembershipIcon from '@material-ui/icons/CardMembership';


function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2"  style={{color: '#fff', fontWeight: 'bold'}}>{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};


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



export default function Projects() {
  const classes = useStyles();

  return (
      <React.Fragment>
        <CssBaseline />
        <Head>
                <title>A propos</title>
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
                            <InfoIcon color="secondary"/>  <Typed
                      strings={['A mon propos']}
                      typeSpeed={70}
                  />

          </Typography>

          <Typography component="p" variant="h5" align="left" paragraph>
            <span style={{ color: '#07d88b'}}>__________</span>
          </Typography>

          <Typography align="left" style={{ color: '#919090' }} paragraph>
                          
          </Typography>

            <div className={classes.root}>
            <Paper className={classes.paper} style={{ backgroundColor: '#152133' }}>
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
                              Je m'appelle <span style={{ color: '#07d88b', fontWeight: 'bold' }}>Andriamahefa Lovaniaina</span> , je vis à Madagascar.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Passionné par le développement web, j'aime expérimenter,
                              découvrir et apprendre des nouvelles technologies.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Dans ce portfolio que j'ai réalisé, je vais vous présenter mes compétences , ainsi que les
                              projets que j'ai réalisé.
                            </Typography>
                            <Button
                              href="https://github.com/niainamahefa"
                              variant="contained"
                              color="default"
                              className={classes.buttonGitHub}
                              startIcon={<CloudDownloadIcon />}
                            >
                              Telecharger mon CV
                            </Button>
                          </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
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
                            <DesktopMacIcon color="secondary"/>  <Typed
                      strings={['Compétences techniques']}
                      typeSpeed={70}
                  />
                        </Typography>

                        <Typography component="p"  align="left" paragraph>
                         <span style={{ color: '#07d88b', fontSize: '130%' }}>_____________</span>
                        </Typography>
                      
                        <Typography  align="left" style={{ color: '#919090' }} paragraph>
                            
                        </Typography>
                    {/* End hero unit */}
                      <Grid container spacing={2}>
                        <Grid item  xs={12} sm={6} md={4}>
                          <motion.Card className={classes.card} style={{ backgroundColor: '#152133' }} variant="outlined"
                          whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                          <CardContent className={classes.cardContent}>
                          <Grid container spacing={2}>
                            <Grid item>
                              <ButtonBase className={classes.skillsImage}>
                              <img className={classes.imgSkills} alt="complex" src="/images/skills/php.png" />
                              </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                              <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                  <Typography color="secondary" style={{fontWeight: 'bold'}} gutterBottom  component="h2">
                                  PHP
                                  </Typography>
                                  <Typography className={classes.progressbar} >
                                    <LinearProgressWithLabel value={70} />
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            </CardContent>
                            </motion.Card>
                        </Grid>
                        
                        <Grid item  xs={12} sm={6} md={4}>
                          <motion.Card className={classes.card} style={{ backgroundColor: '#152133' }} variant="outlined"
                          whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                          <CardContent className={classes.cardContent}>
                          <Grid container spacing={2}>
                            <Grid item>
                              <ButtonBase className={classes.skillsImage}>
                              <img className={classes.imgSkills} alt="complex" src="/images/skills/symfony.png" />
                              </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                              <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                  <Typography color="secondary" style={{fontWeight: 'bold'}} gutterBottom  component="h2">
                                  Symfony
                                  </Typography>
                                  <Typography className={classes.pos} color="textSecondary">
                                  <LinearProgressWithLabel value={80} />
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            </CardContent>
                            </motion.Card>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                          <motion.Card className={classes.card} style={{ backgroundColor: '#152133' }} variant="outlined"
                          whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                          <CardContent className={classes.cardContent}>
                          <Grid container spacing={2}>
                            <Grid item>
                              <ButtonBase className={classes.skillsImage}>
                              <img className={classes.imgSkills} alt="complex" src="/images/skills/laravel.png" />
                              </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                              <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                  <Typography color="secondary" style={{fontWeight: 'bold'}} gutterBottom  component="h2">
                                  Laravel
                                  </Typography>
                                  <Typography className={classes.pos} color="textSecondary">
                                  <LinearProgressWithLabel value={60} />
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            </CardContent>
                            </motion.Card>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                          <motion.Card className={classes.card} style={{ backgroundColor: '#152133' }} variant="outlined"
                          whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                          <CardContent className={classes.cardContent}>
                          <Grid container spacing={2}>
                            <Grid item>
                              <ButtonBase className={classes.skillsImage}>
                              <img className={classes.imgSkills} alt="complex" src="/images/skills/python.png" />
                              </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                              <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                  <Typography color="secondary" style={{fontWeight: 'bold'}} gutterBottom  component="h2">
                                  Python
                                  </Typography>
                                  <Typography className={classes.pos} color="textSecondary">
                                  <LinearProgressWithLabel value={50} />
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            </CardContent>
                            </motion.Card>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                          <motion.Card className={classes.card} style={{ backgroundColor: '#152133' }} variant="outlined"
                          whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                          <CardContent className={classes.cardContent}>
                          <Grid container spacing={2}>
                            <Grid item>
                              <ButtonBase className={classes.skillsImage}>
                              <img className={classes.imgSkills} alt="complex" src="/images/skills/java.png" />
                              </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                              <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                  <Typography color="secondary" style={{fontWeight: 'bold'}} gutterBottom  component="h2">
                                  Java
                                  </Typography>
                                  <Typography className={classes.pos} color="textSecondary">
                                  <LinearProgressWithLabel value={45} />
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            </CardContent>
                            </motion.Card>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                          <motion.Card className={classes.card} style={{ backgroundColor: '#152133' }} variant="outlined"
                          whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                          <CardContent className={classes.cardContent}>
                          <Grid container spacing={2}>
                            <Grid item>
                              <ButtonBase className={classes.skillsImage}>
                              <img className={classes.imgSkills} alt="complex" src="/images/skills/flutter.png" />
                              </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                              <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                  <Typography color="secondary" style={{fontWeight: 'bold'}} gutterBottom  component="h2">
                                  Flutter
                                  </Typography>
                                  <Typography className={classes.pos} color="textSecondary">
                                  <LinearProgressWithLabel value={65} />
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            </CardContent>
                            </motion.Card>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                          <motion.Card className={classes.card} style={{ backgroundColor: '#152133' }} variant="outlined"
                          whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                          <CardContent className={classes.cardContent}>
                          <Grid container spacing={2}>
                            <Grid item>
                              <ButtonBase className={classes.skillsImage}>
                              <img className={classes.imgSkills} alt="complex" src="/images/skills/wordpress.png" />
                              </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                              <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                  <Typography color="secondary" style={{fontWeight: 'bold'}} gutterBottom  component="h2">
                                  Wordpress
                                  </Typography>
                                  <Typography className={classes.pos} color="textSecondary">
                                  <LinearProgressWithLabel value={70} />
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            </CardContent>
                            </motion.Card>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                          <motion.Card className={classes.card} style={{ backgroundColor: '#152133' }} variant="outlined"
                          whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                          <CardContent className={classes.cardContent}>
                          <Grid container spacing={2}>
                            <Grid item>
                              <ButtonBase className={classes.skillsImage}>
                              <img className={classes.imgSkills} alt="complex" src="/images/skills/react.png" />
                              </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                              <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                  <Typography color="secondary" style={{fontWeight: 'bold'}} gutterBottom  component="h2">
                                  React.js
                                  </Typography>
                                  <Typography className={classes.pos} color="textSecondary">
                                  <LinearProgressWithLabel value={30} />
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            </CardContent>
                            </motion.Card>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                          <motion.Card className={classes.card} style={{ backgroundColor: '#152133' }} variant="outlined"
                          whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                          <CardContent className={classes.cardContent}>
                          <Grid container spacing={2}>
                            <Grid item>
                              <ButtonBase className={classes.skillsImage}>
                              <img className={classes.imgSkills} alt="complex" src="/images/skills/bootstrap.png" />
                              </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                              <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                  <Typography color="secondary" style={{fontWeight: 'bold'}} gutterBottom  component="h2">
                                  Bootstrap
                                  </Typography>
                                  <Typography className={classes.pos} color="textSecondary">
                                  <LinearProgressWithLabel value={80} />
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            </CardContent>
                            </motion.Card>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                          <motion.Card className={classes.card} style={{ backgroundColor: '#152133' }} variant="outlined"
                          whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                          <CardContent className={classes.cardContent}>
                          <Grid container spacing={2}>
                            <Grid item>
                              <ButtonBase className={classes.skillsImage}>
                              <img className={classes.imgSkills} alt="complex" src="/images/skills/git.png" />
                              </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                              <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                  <Typography color="secondary" style={{fontWeight: 'bold'}} gutterBottom  component="h2">
                                  Git
                                  </Typography>
                                  <Typography className={classes.pos} color="textSecondary">
                                  <LinearProgressWithLabel value={55} />
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            </CardContent>
                            </motion.Card>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                          <motion.Card className={classes.card} style={{ backgroundColor: '#152133' }} variant="outlined"
                          whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                          <CardContent className={classes.cardContent}>
                          <Grid container spacing={2}>
                            <Grid item>
                              <ButtonBase className={classes.skillsImage}>
                              <img className={classes.imgSkills} alt="complex" src="/images/skills/javascript.png" />
                              </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                              <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                  <Typography color="secondary" style={{fontWeight: 'bold'}} gutterBottom  component="h2">
                                  Javascript
                                  </Typography>
                                  <Typography className={classes.pos} color="textSecondary">
                                  <LinearProgressWithLabel value={50} />
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            </CardContent>
                            </motion.Card>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                          <motion.Card className={classes.card} style={{ backgroundColor: '#152133' }} variant="outlined"
                          whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                          <CardContent className={classes.cardContent}>
                          <Grid container spacing={2}>
                            <Grid item>
                              <ButtonBase className={classes.skillsImage}>
                              <img className={classes.imgSkills} alt="complex" src="/images/skills/html.png" />
                              </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                              <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                  <Typography color="secondary" style={{fontWeight: 'bold'}} gutterBottom  component="h2">
                                  HTML
                                  </Typography>
                                  <Typography className={classes.pos} color="textSecondary">
                                  <LinearProgressWithLabel value={90} />
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            </CardContent>
                            </motion.Card>
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                          <motion.Card className={classes.card} style={{ backgroundColor: '#152133' }} variant="outlined"
                          whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                          <CardContent className={classes.cardContent}>
                          <Grid container spacing={2}>
                            <Grid item>
                              <ButtonBase className={classes.skillsImage}>
                              <img className={classes.imgSkills} alt="complex" src="/images/skills/css.png" />
                              </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                              <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                  <Typography color="secondary" style={{fontWeight: 'bold'}} gutterBottom  component="h2">
                                  CSS
                                  </Typography>
                                  <Typography className={classes.pos} color="textSecondary">
                                  <LinearProgressWithLabel value={90} />
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            </CardContent>
                            </motion.Card>
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
                            <CardMembershipIcon color="secondary"/>  <Typed
                      strings={['Mes certificats']}
                      typeSpeed={70}
                  />
                        </Typography>

                        <Typography component="p" variant="h5" align="left" paragraph>
                         <span style={{ color: '#07d88b', fontSize: '130%' }}>_____________</span>
                        </Typography>
                      
                        <Typography  align="left" style={{ color: '#919090' }} paragraph>
                            
                        </Typography>
                    {/* End hero unit */}
                    <Grid container spacing={3}>
						<Grid item  xs={12} sm={6} md={4}>
							<motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
								<Link className={classes.certImages} href="https://www.sololearn.com/Certificate/1059-15978578/pdf">
									<a><img className={classes.ImgCertif} src="https://www.sololearn.com/Certificate/1059-15978578/jpg" alt=""/></a>
								</Link>
							</motion.div>
						</Grid>
                        <Grid item  xs={12} sm={6} md={4}>
							<motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
								<Link className={classes.certImages} href="https://www.sololearn.com/Certificate/1068-15978578/pdf">
								<a><img className={classes.ImgCertif} src="https://www.sololearn.com/Certificate/1068-15978578/jpg" alt=""/></a>
								</Link>
							</motion.div>
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
							<motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
								<Link className={classes.certImages} href="https://www.sololearn.com/Certificate/1073-15978578/pdf">
								<a><img className={classes.ImgCertif} src="https://www.sololearn.com/Certificate/1073-15978578/jpg" alt=""/></a>
								</Link>
							</motion.div>
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
							<motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
								<Link className={classes.certImages} href="https://www.sololearn.com/Certificate/1060-15978578/pdf">
								<a><img className={classes.ImgCertif} src="https://www.sololearn.com/Certificate/1060-15978578/jpg" alt=""/></a>
								</Link>
							</motion.div>
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
							<motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
								<Link className={classes.certImages} href="https://www.sololearn.com/Certificate/1024-15978578/pdf">
								<a><img className={classes.ImgCertif} src="https://www.sololearn.com/Certificate/1024-15978578/jpg" alt=""/></a>
								</Link>
							</motion.div>
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
							<motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
								<Link className={classes.certImages} href="https://www.sololearn.com/Certificate/1014-15978578/pdf">
								<a><img className={classes.ImgCertif} src="https://www.sololearn.com/Certificate/1014-15978578/jpg" alt=""/></a>
								</Link>	
							</motion.div>
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
							<motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
								<Link className={classes.certImages} href="https://www.sololearn.com/Certificate/1023-15978578/pdf">
								<a><img className={classes.ImgCertif} src="https://www.sololearn.com/Certificate/1023-15978578/jpg" alt=""/></a>
								</Link>
							</motion.div>
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
							<motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
								<Link className={classes.certImages} href="https://www.sololearn.com/Certificate/1082-15978578/pdf">
								<a><img className={classes.ImgCertif} src="https://www.sololearn.com/Certificate/1082-15978578/jpg" alt=""/></a>
								</Link>
							</motion.div>
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