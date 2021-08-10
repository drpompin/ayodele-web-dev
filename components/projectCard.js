import React from 'react'
import Bounce from 'react-reveal/Bounce'
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";


const appColor = '#ff6347'
const darkText = '#c9d1d9'
const darkBackground = '#37474F'



const useStyles = makeStyles((theme) => ({
    projectCard: {
		width: '48%',
		display: 'flex',
		flexDirection: 'column',
		borderRadius: 5,
		alignItems: 'space-between',
		marginBottom: 50,
		backgroundColor: '#fff',
		// boxShadow: '0 4px 10px rgba(0,0,0,0.12), 0 4px 10px 0 rgba(0,0,0,0.24)',
		boxShadow: '1px 1px 5px 0px rgba(11,0,0,0.12), 0 2px 5px 1px rgba(0,0,0,0.24)',
		transition: 'all 0.5s cubic-bezier(.25,.8,.25,1)',
		overflow: 'hidden',

		'&:hover': {
			boxShadow: '0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22)',
		},

		[theme.breakpoints.down("xs")]: {
			width: '100%',
		}
	},

	projectCardImage: {
		width: '100%',
		height: 250,
		borderBottom: '2px solid lightgrey',
	},

    projectTechDiv: {
		margin: 0,
		fontWeight: 600,
		padding: '0 20px',
		textAlign: 'center',

		[theme.breakpoints.down("xs")]: {
			padding: '0 10px',
		}
	},

	projectCardLinkRow: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-around',
		padding: '10px 20px 20px',

		[theme.breakpoints.down("xs")]: {
			padding: '10px 10px 20px',
			justifyContent: 'space-between',
		}
	},

	projectCardLink: {
		cursor: 'pointer'
	},

    linkText: {
		color: appColor, 
		cursor: 'pointer',

		'&:hover': {
			// opacity: '0.8',
			color: 'blue',
			textDecoration: 'underline',
		},

		'&:visited': {
			color: 'blue',
		}
	}
}));


const ProjectCard = ( props ) => {
	const classes = useStyles();

    return (
        <div className={classes.projectCard} style={props.darkMode ? { backgroundColor: darkBackground } : {}}>
            <Bounce>
                <img 
                    src={props.imgSrc}
                    className={classes.projectCardImage}
                />
            </Bounce>

            <div style={{ display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'space-between', flexGrow: 1 }}>
                
                {props.projectSummary}

                <div>

                    <p className={classes.projectTechDiv} style={props.darkMode ? { color: darkText } : {}}>
                        {props.projectTechStack}
                    </p>

                    {
                        props.links ?
                        <div className={classes.projectCardLinkRow}>
                            <Link href={props.projectLink} className={classes.projectCardLink}><span className={classes.linkText}>View</span></Link>
                            <Link href={props.projectRepo} className={classes.projectCardLink}><span className={classes.linkText}>Git Repo</span></Link>
                        </div>
                        :
                        <div className={classes.projectCardLinkRow} style={{height: 52}}>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard