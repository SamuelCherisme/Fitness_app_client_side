import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#fff"
    },
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://github.com/talltril/hello-world/blob/master/images/Home_banner_26112014_120140.jpg?raw=true')`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
        [theme.breakpoints.down("sm")]: {
            height: 300,
            fontSize: "3em"
        }
    },
    blogsContainer: {
        paddingTop: theme.spacing(3)
    },
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3)
    },
    card: {
        maxWidth: "100%",
    },
    media: {
        height: 240
    },
    cardActions: {
        display: "flex",
        margin: "0 10px",
        justifyContent: "space-between"
    },
    author: {
        display: "flex"
    },
    paginationContainer: {
        display: "flex",
        justifyContent: "center"
    }
}));

function App() {
    const classes = useStyles();

    return (
        <div className="App">
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <Typography variant="h6" color="primary" >

                    </Typography>
                </Toolbar>
            </AppBar>
            <Box className={classes.hero}>
                <Box>30 DAY JUMP START</Box>
            </Box>
            <Container maxWidth="lg" className={classes.blogsContainer}>
                <Typography variant="h4" className={classes.blogTitle}>
                    <h1>BELIEVE. WORK. ACHIEVE.</h1>
        </Typography>
                </Container>
            <div>
                <div className="slogan is-family-primary has-text-centered has-text-weight-bold" style={{ fontSize: '20px', marginBottom: '30' }}>
                    <h1>
                    </h1>
                    <div class="container is-fluid" style={{ width: '50%' }}>
                        <div class="notification" style={{ fontSize: '25px' }}>
                            <strong></strong>
                        </div>
                        <p>Join the Strong Bodiez 30-Day Jump Start Program and transform yourself into the healthiest version of you. 
                        We have combined our amazing metabolic resistance-training program with a simple but extremely effective nutrition plan to create a fat-melting combination that is guaranteed to get you incredible results in just 30 days!.</p>
                        <hr/>
                        <br />
                        <strong>AS A 30-DAY JUMP START PROGRAM PARTICIPANT, YOU’LL RECEIVE:</strong>
                        <p>We work with everyone from busy professionals and busy moms, to brides/grooms to be. and people wanting a mental and physical transformation.</p>
                        <ul>
                            <li>A Success Session to set your goals and map out your plan for success.</li>
                            <br/>
                            <li>12 Metabolic Resistance Training workouts that will have you melting fat for the entire 30 days.</li>
                            <br/>
                            <li>30 Days of Fat-Burning Meal Plans designed for even the busiest person to get amazing results.</li>
                            <br/>
                            <li>A Strong Bodiez Fat Loss Transformation Challenge t-shirt.</li>
                        </ul>
                        <br />
                        <hr/>
                        <p>And don't forget our 100% money-back guarantee: If you follow the 30-day workout and nutrition plan and are not happy with your results, we’ll give you your money back!</p>
                        <br />
                        <p>All this is easily worth $545. But we don’t want money to be a barrier to anyone getting in the best shape of their lives, so we’ve decided to price the 30-day program for $425.</p>
                        <br/>
                        <p>We hope to see you at Strong Bodiez soon!</p>
                        <br />
                        <p>We’ll help you change your lifestyle by motivating and supporting you, staying in tune with your needs and teaching you the tools to achieve your goals, and then some! Most of all? We’ll have fun doing it.</p>
                        <br />

                    </div>
                </div>
            </div>


        </div>
                
                
    );
}

export default App;