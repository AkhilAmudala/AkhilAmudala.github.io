import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActionArea, CardMedia, Typography, Grid, Container } from '@material-ui/core/';
import { Media } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.primary.light,
    },
    card: {
        maxWidth: 250,
        margin: 0,
    },
    media: {
        height: 160,
    },
}));


export default function Portfolio(props) {
    const classes = useStyles();

    if (props.data) {
        var projects = props.data.projects.map(function (projects) {
            var projectImage = 'images/portfolio/' + projects.image;

            return (
                <div key={projects.title} className="columns portfolio-item" >
                <Card className={classes.card}>
                      <CardMedia className={classes.media} image={projectImage} title={projects.title} />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">{projects.title}</Typography>
                          <Typography variant="body2" gutterBottom>{projects.category}</Typography>
                      </CardContent>
                </Card>
                </div>
            )
        })
    }

    return (
        <section className={classes.root} id="portfolio">
            <Container className="row">
            <h1>Here are some of the other projects that I have worked on.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        {projects}
                    </div>
            </Container>
        </section>
    );
}
