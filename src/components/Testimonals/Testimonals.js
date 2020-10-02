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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://github.com/talltril/hello-world/blob/master/images/Home_banner_26112014_120140.jpg?raw=true)`,
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

function Testimonals() {
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
                <Box>We got them talkin'</Box>
            </Box>
            <Container maxWidth="lg" className={classes.blogsContainer}>
                <Typography variant="h4" className={classes.blogTitle}>
                    Testimonials
        </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontent.cpr.org%2Fwp-content%2Fthemes%2Fcpr%2Fimages%2Fdefault-avatar.png&f=1&nofb=1"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        GINA MARIE MARTINEZ
                  </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        " I am a current client of Jennifer’s. She is an AMAZING trainer! I had never lifted weights, completed a pull-up or lifted weights. I used to workout here and there doing Pilates and yoga. Fast forward to today, and I cannot get enough! I have lost inches, increased the amount of weight I can train with, and strengthened several areas that were deficient and causing me problems (knees and upper back/shoulders). She also teaches me about nutrition and how to make this a lifestyle not just a fad diet or quick fix. Training with Jen has been the best decision I have made for myself as I feel better, sleep better, handle stress better, etc… While loving every minute of the journey!"
                  </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardActions}>
                                <Box className={classes.author}>
                                    <Avatar src="" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            Gina Marie Martinez
                    </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                           
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
                                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontent.cpr.org%2Fwp-content%2Fthemes%2Fcpr%2Fimages%2Fdefault-avatar.png&f=1&nofb=1"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        STEPHANIE PHILLIPS CASAS
                  </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                       
                                        "Jen is the bomb! She pushes you to do things you never thought you could but at the same time is concerned about your well being and preventing injuries while working with your past injuries. Training with her has literally changed my life. I highly recommend her! Do it!"


                  </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardActions}>
                                <Box className={classes.author}>
                                    <Avatar src="" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            Stephanie Phillips Casas
                    </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                            
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
                                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontent.cpr.org%2Fwp-content%2Fthemes%2Fcpr%2Fimages%2Fdefault-avatar.png&f=1&nofb=1"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        JENNA DICARLO
                  </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        "Jen is the bomb! She pushes you to do things you never thought you could but at the same time is concerned about your well being and preventing injuries while working with your past injuries. Training with her has literally changed my life. I highly recommend her! Do it!"
                  </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardActions}>
                                <Box className={classes.author}>
                                    <Avatar src="" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            Jenna Dicarlo
                    </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                            
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
                                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontent.cpr.org%2Fwp-content%2Fthemes%2Fcpr%2Fimages%2Fdefault-avatar.png&f=1&nofb=1"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        JASMINE WAHBA
                  </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        My fitness experience with Jennifer started in 2014 and it was probably the best decision I’ve ever made. Not only did it help me health wise, it actually made me more social. I was at a point in my life where I was very quiet and wasn’t happy where I was at. I was very optimistic on training with Jennifer at first because I didn’t know what to expect. So I tried her class at first when she was at Intense Fitness full time and I was hooked! I went to her boot camps every Saturday and was doing stuff on my own about 3x a week. Jennifer then asked to come and work out other days one on one as well as with other people. From then on, I continued to follow her wherever she went, from Intense Fitness, Rock 50, to Symmetry Fitness. 

                                        Continuing with Jennifer has made me so much of a better person today. I’ve made so many friends and became more comfortable in my own skin and not being afraid of showing off my goofyness (airhead at times ha) and not being ashamed about it. Jennifer taught me like I was her younger sister, but now swole sisters as well as one of my best friends! She has this ambition about her that makes you a better person inside and out!

                                        Training with her I’ve had a TREMENDOUS change. I started out at 34% body fat and did weights 3x a week. I then started adding in cardio on days I didn’t lift. I went down 24% body fat in 2 months! If that doesn’t show you how dedicated Jennifer is to her clients, I don’t know what will. Once I saw that number on paper, those results pumped me up and wanted me to strive for more. I wanted to lean out and build muscle. I then saw I hit a plateau, and was wondering why and Jennifer said to start logging my food. To be honest, I hated being those people that put in their food and couldn’t eat this because I didn’t have “room” for it. But I told myself you know what, let me try it. Just in two months of logging my food and now lifting 4-5x a week, I see a huge difference! I am now down to 16% body fat! I’ve gained so much muscle in my arms, legs, butt (#bootybyjenn) and back. I’m so motivated to keep going and continue seeing the best results my body can give me, and it’s all because of Jennifer’s push and love for this industry. 

                                        Every personal trainer can say “I’m not the best trainer” but Jennifer Rosidor is surely the BEST. Her heart is in it and you can tell after just the first training session with her. I now have another passion, and that’s fitness. I’ve become an official gym rat and I’m proud of it! Thank you Jenn! Love ya!!
                  </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardActions}>
                                <Box className={classes.author}>
                                    <Avatar src="" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            Jasmine Wahba
                    </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                            
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
        </div>
        
    );
}



export default Testimonals;