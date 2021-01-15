import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined'
import CloseIcon from '@material-ui/icons/Close'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Tooltip from '@material-ui/core/Tooltip'
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined'
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent'
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined'


const appColor = '#ff6347'
const darkText = '#c9d1d9'
const darkBackground = '#37474F'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: 0,
    },

    containerStyle: {
        padding: '0',
        backgroundColor: '#fff',

        [theme.breakpoints.down("xs")]: {
            padding: '0 !important',
        }
    },

    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '60px',
        padding: '10px 50px',
        background: '#fff',
        boxShadow: '0 0.5px 6px #ff6347',

        [theme.breakpoints.down("xs")]: {
            padding: '0 1rem',
        }
    },

    mainMenu: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        [theme.breakpoints.down("xs")]: {
            display: 'none',
        }
    },

    headerIcon: {
        color: '#ff6347',
        fontSize: 30,
        cursor: 'pointer',
    },

    menuListItem: {
        padding: '0 1rem',
        color: appColor,
        cursor: 'pointer',
        fontWeight: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    menuIcon: {

        color: '#ff6347',
        fontSize: 30,
        display: 'none',

        [theme.breakpoints.down("xs")]: {
            display: 'block',
        }
    },
    
    mobileMenuContainer: {
        height: '100%',
        width: 0,
        position: 'fixed',
        zIndex: 20000,
        top: 0,
        left: 0,
        backgroundColor: '#fff',
        overflowX: 'hidden',
        transition: '0.5s',
    },

    mobileMenuList: {
        position: 'relative',
        width: '100%',
        marginTop: 50,
    },

    mobileListItem: {
        textDecoration: 'none',
        fontSize: 20,
        color: appColor,
        display: 'block',
        transition: '0.3s',
        textAlign: 'right',
        padding: '1rem',
        fontFamily: 'Asap Condensed, serif, sans-serif',

        '&:hover': {
            backgroundColor: appColor,
            color: '#fff',
        }
    },

    closeContainer: {
        position: 'absolute',
        top: 15,
        right: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0 1rem',
    },

    closeIcon: {
        color: '#ff6347',
        cursor: 'pointer',

        [theme.breakpoints.down("xs")]: {
            fontSize: 30,
        }
    },

}));


function Header({ 
        projectScrollFunction, 
        closeMobileDropdown, 
        mobileRef, 
        mobileDropDown, 
        handleMobileDropdown,
        baseScrollFunction,
        aboutScrollFunction,
        toolScrollFunction,
        reachScrollFunction,
        handleDarkMode,
        darkMode
    }) {
        
    const classes = useStyles();
    
    return (
        <>
            <div className={classes.header} style={darkMode ? { backgroundColor: darkBackground, borderBottom: `2px solid ${darkText}`} : {} }>
                <HomeOutlinedIcon className={classes.headerIcon} onClick={() => baseScrollFunction()} style={ darkMode ? { color: darkText } : {} } />

                <div className={classes.mainMenu}>
                    <span variant="outlined" onClick={() => aboutScrollFunction()}  className={classes.menuListItem} style={ darkMode ? { color: darkText } : {} }>Ayodele</span>
                    <span variant="outlined" onClick={() => toolScrollFunction()} className={classes.menuListItem} style={ darkMode ? { color: darkText } : {} }>Toolbox</span>
                    <span variant="outlined" onClick={() => projectScrollFunction()} className={classes.menuListItem} style={ darkMode ? { color: darkText } : {} }>Projects</span>
                    <span variant="outlined" onClick={() => reachScrollFunction()} className={classes.menuListItem} style={darkMode ? { color: darkText } : {}}>Reach Out</span>
                    <span variant="outlined" className={classes.menuListItem} style={darkMode ? { color: darkText } : {}}>
                        <Tooltip disableFocusListener title="Download Resume">
                            <a href="/files/Resume.pdf" download="Ayodele-resume.pdf" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <CloudDownloadOutlinedIcon style={darkMode ? { color: darkText } : { color: appColor }} />
                            </a>
                        </Tooltip>
                    </span>
                    <span variant="outlined" className={classes.menuListItem} style={ darkMode ? { color: darkText } : {} }>
                        {
                            !darkMode &&
                            <WbIncandescentIcon style={{ fontSize: 20 }} onClick={() => handleDarkMode()} />
                        }

                        {
                            darkMode &&
                            <WbIncandescentOutlinedIcon style={{ fontSize: 20 }} onClick={() => handleDarkMode()} style={ darkMode ? { color: darkText } : {} } />
                        }
                    </span>
                </div>

                {
                    !mobileDropDown &&
                    <MenuOutlinedIcon className={classes.menuIcon} onClick={handleMobileDropdown} style={darkMode ? { color: darkText } : {}}/>
                }

                <div className={classes.mobileMenuContainer} style={darkMode ? { backgroundColor: darkBackground } : {}} ref={mobileRef} >
                    <span className={classes.closeContainer}>
                        <CloseIcon className={classes.closeIcon} onClick={() => closeMobileDropdown()} style={darkMode ? { color: darkText } : {}}/>
                    </span>

                    <List className={classes.mobileMenuList}>
                        <ListItem onClick={() => aboutScrollFunction()} className={classes.mobileListItem} style={darkMode ? { color: darkText } : {}}>
                            <ListItemText disableTypography>
                                Ayodele
                            </ListItemText>
                        </ListItem>

                        <ListItem onClick={() => toolScrollFunction()} className={classes.mobileListItem}style={ darkMode ? { color: darkText } : {} }>
                            <ListItemText disableTypography>
                                Toolbox
                            </ListItemText>
                        </ListItem>

                        <ListItem onClick={() => projectScrollFunction()} className={classes.mobileListItem}style={ darkMode ? { color: darkText } : {} }>
                            <ListItemText disableTypography>
                                Projects
                            </ListItemText>
                        </ListItem>

                        <ListItem onClick={() => reachScrollFunction()} className={classes.mobileListItem}style={ darkMode ? { color: darkText } : {} }>
                            <ListItemText disableTypography>
                                Reach Out
                            </ListItemText>
                        </ListItem>

                        <ListItem className={classes.mobileListItem}>
                            <ListItemText disableTypography>
                                <Tooltip title="Download Resume">
                                    <a href="/files/Resume.pdf" onClick={() => closeMobileDropdown()} style={{ textDecoration: 'none' }} download="Ayodele-resume.pdf">
                                        <CloudDownloadOutlinedIcon style={darkMode ? { color: darkText } : {color: appColor, '&:hover': { color: '#fff' } }} />
                                    </a>
                                </Tooltip>
                            </ListItemText>
                        </ListItem>

                        <ListItem className={classes.mobileListItem}>
                            <ListItemText disableTypography>
                                {   
                                    !darkMode &&
                                    <WbIncandescentIcon onClick={() => handleDarkMode()} />
                                }

                                {
                                    darkMode &&
                                    <WbIncandescentOutlinedIcon onClick={() => handleDarkMode()} style={darkMode ? { color: darkText } : {}} />
                                }
                            </ListItemText>
                        </ListItem>
                    </List>
                </div>
            </div>
        </>
    )
}

export default Header