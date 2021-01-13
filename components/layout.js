import React from 'react'
import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles'



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
}));


export const siteTitle = 'Ayodele Web Developer'

export default function Layout({ children }) {
    const classes = useStyles();
   
    return (
        <div className={classes.root}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            
            <div className={classes.containerStyle}>
                {children}
            </div>
        </div>
    )
}