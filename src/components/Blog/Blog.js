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
import Footer from '../Footer/Footer'

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#fff"
    },
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://github.com/talltril/hello-world/blob/master/Images/Jen_Fitness.jpg?raw=true')`,
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
                        Blog
          </Typography>
                </Toolbar>
            </AppBar>
            <Box className={classes.hero}>
                <Box>Strong Boidez Blog</Box>
            </Box>
            <Container maxWidth="lg" className={classes.blogsContainer}>
                <Typography variant="h4" className={classes.blogTitle}>
                    Articles
        </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://images.squarespace-cdn.com/content/v1/56b2c2e7d210b8c659dc9dcf/1588062487011-BQIEELRXP71TEHAB9ZX2/ke17ZwdGBToddI8pDm48kJK4Mm1kch8SFO9ZNkN1NT97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmFk_H6M1tkD9NpL7mXac0oVSXdFfjxR5AjcLwGSebOiGBsFzzcw3xKxvyC_6CFFG_/5+Exercise+tips+to+improve+your+workout+routine?format=750w"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        5 Exercise tips to improve your workout routine
                  </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Have exercise misconceptions prevented you from starting an exercise program? Clear up any confusion and let these exercise tips improve your workout routine. At some point, one of these common exercise myths, mistakes, and misconceptions have prevented you from working out.
                  </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardActions}>
                                <Box className={classes.author}>
                                    <Avatar src="https://github.com/talltril/hello-world/blob/master/Images/o%20(1).jpg?raw=true" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            Micheal Rosidor
                    </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                            April 28, 2020
                    </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <BookmarkBorderIcon />
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://images.squarespace-cdn.com/content/v1/56b2c2e7d210b8c659dc9dcf/1587499755877-UBU7FDP3HLN803JKJ9HE/ke17ZwdGBToddI8pDm48kNRiN2Jejm_avnnE8ut1jZJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmzZHn3PYdZUow1T0ZeZQrhXjhAvzoituf5wDevWjGJHim6saZ3GZr2jGY_SMIbWvH/51077089_373432126817904_4588015772418496747_n.jpg?format=750w"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        3-STEP STAY WELL AND STAY FIT STRATEGY
                  </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        With the threat of both the coronavirus and the pandemic pounds or quarantine-15, as I’ve heard it described, it can feel like your two options are to get sick or to pack on the pounds during this time of quarantine.
                  </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardActions}>
                                <Box className={classes.author}>
                                    <Avatar src="https://github.com/talltril/hello-world/blob/master/Images/o%20(1).jpg?raw=true" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            Micheal Rosidor
                    </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                            April 21, 2020
                    </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <BookmarkBorderIcon />
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://images.squarespace-cdn.com/content/v1/56b2c2e7d210b8c659dc9dcf/1586332218736-0BV8W56ZVKSJS7N3I68Z/ke17ZwdGBToddI8pDm48kJK4Mm1kch8SFO9ZNkN1NT97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmFk_H6M1tkD9NpL7mXac0oVSXdFfjxR5AjcLwGSebOiGBsFzzcw3xKxvyC_6CFFG_/91980765_1380707868781084_1296116019321016545_n.jpg?format=500w"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        10 Proven Tricks To Win Yourself A Gorgeous Body
                  </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Most folks I know started the New Year by making resolutions to lose weight and get in shape. Often, this mission is easier said than done. Some last a little longer than others, but for most, they are cut off in no time. Here are ten delightful tactics that can empower you to motivate yourself to a better body.
                  </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardActions}>
                                <Box className={classes.author}>
                                    <Avatar src="https://github.com/talltril/hello-world/blob/master/Images/o%20(1).jpg?raw=true" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            Micheal Rosidor
                    </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                            April 8, 2020
                    </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <BookmarkBorderIcon />
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.hpnonline.com%2Ffiles%2Fbase%2Febm%2Fhpn%2Fimage%2F2020%2F03%2F16x9%2FSome_COVID_19_patients_still_have_coronavirus_after_symptoms_disappear_pic___3.30.20du___coronavirus_4952102_1920___Pixabay.5e8207aa087bf.png%3Fauto%3Dformat%26fit%3Dmax%26w%3D1200&f=1&nofb=1"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Has the Corona Virus Caused You to Relapse?
                  </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Is this you? Have you relapsed into your old unhealthy habits? The sad truth is that this epidemic has nearly everyone who started off 2020 with strong fitness goals has by now given up. I hope this isn’t you. This is the cycle that happens after life throws you a challenge, and you relapse into your old unhealthy habits, and here’s how to pick yourself back up:
                  </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardActions}>
                                <Box className={classes.author}>
                                    <Avatar src="https://github.com/talltril/hello-world/blob/master/Images/o%20(1).jpg?raw=true" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            Micheal Rosidor
                    </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                            March 23, 2020
                    </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <BookmarkBorderIcon />
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                
                <Box my={4} className={classes.paginationContainer}>
                    <Pagination count={1} />
                </Box>
            </Container>
            <Footer/>
        </div>
    );
}

export default App;