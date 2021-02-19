import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import ListIcon from '@material-ui/icons/List';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import { motion } from 'framer-motion'


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
}));

export default function Navbar() {
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <Button href="/"><img src="/images/favicon.png" alt=""/></Button>
                        </Typography>
                          <div>
                          <Button
                            style={{ color: '#fff'}}
                            href="/"
                            >
                              <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 0.9}}>
                                <FacebookIcon />
                              </motion.div>
                            </Button>
                            <Button
                            style={{ color: '#fff'}}
                            href="https://www.linkedin.com/in/niaina-mahefa"
                            >
                              <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 0.9}}>
                                <LinkedInIcon />
                              </motion.div>
                            </Button>
                            <Button
                            style={{ color: '#fff'}}
                            href="https://github.com/niainamahefa"
                            >
                              <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 0.9}}>
                                <GitHubIcon />
                              </motion.div>
                            </Button>
                            <Button
                            style={{ color: '#fff'}}
                              ref={anchorRef}
                              aria-controls={open ? 'menu-list-grow' : undefined}
                              aria-haspopup="true"
                              onClick={handleToggle}
                            >
                              <ListIcon /> 
                            </Button>
                            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                              {({ TransitionProps, placement }) => (
                                <Grow
                                  {...TransitionProps}
                                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                  <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                      <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                      <Link style={{textDecoration : 'none' }} href="/">
                                              <MenuItem onClick={handleClose}>Accueil</MenuItem>
                                        </Link>
                                        <Link style={{textDecoration : 'none' }} href="/about">
                                             <MenuItem onClick={handleClose}>A propos</MenuItem>
                                        </Link>
                                        <Link style={{textDecoration : 'none' }} href="/projects">
                                             <MenuItem onClick={handleClose}>Projets</MenuItem>
                                        </Link>
                                        <Link style={{textDecoration : 'none' }} href="/contact">
                                             <MenuItem onClick={handleClose}>Contact</MenuItem>
                                        </Link>
                                      </MenuList>
                                    </ClickAwayListener>
                                  </Paper>
                                </Grow>
                              )}
                            </Popper>
                          </div>
                    </Toolbar>
            </AppBar>
        </div>
    );
}