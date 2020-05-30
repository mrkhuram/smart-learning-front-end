import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as routes from "../../../constants/routePaths";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import natureImg from "../../../assets/Images/homepageImages/nature.jpg";
import playIcon from "../../../assets/icons/play-icon.png";
import { Link } from "react-router-dom";
import clsx from 'clsx'
const useStyles = makeStyles({
  root: {
    margin: "10px 10px",
    display:'flex',
    // flexDirection: 'coloumn'
    height: 250
  },
  zeroPadding: {
    padding: "4px"
  },
  description: {
    paddingLeft: "11px",
    paddingRight: "11px",
    paddingBottom: " 6px",
    width: 480,
    marginTop: "20px !important"
  },
  img_side: {
    width: 400
  },
  venue: {
    marginTop: 20,
    marginLeft: 10,
    color: '#30B484'
  },
  heading:{
    fontSize: 20,
    fontWeight: 500
  },
  venueText:{
    marginLeft: 10
  },
  thirdPart:{
    width: 343,
    textAlign: 'right'
  },
  time:{
    fontSize: 20,
    fontWeight: 500,
    textTransform: 'uppercase',
    paddingRight: 7
  },

  viewDetailsButton:{
    marginTop: 80
  },
  buttonDetails: {
    padding: '10px 20px',
    fontSize: 18,
    color: 'white',
    backgroundColor: "#30B484",
    border: 'none',
    borderRadius: 5
  }
});

export default function Slide() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <div className={classes.img_side}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="300"
            // width="300"
            image={natureImg}
            title="Contemplative Reptile"
          />
        </div>
      <CardContent className={classes.zeroPadding}>
        <p
          // className="card-title"
          style={{
            paddingLeft: "11px",
            paddingRight: "7px",
            paddingTop: "7px",
            fontSize: "25px",
            fontWeight: 500,
            marginBottom: 20
          }}
        >
          {" "}
         Intro to Physics Part-1 with notes
        </p>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.description}
        >
         After the course, it's all about us to use what we learn. I love the courses made it bychand. They are easy to follow, to understand To put in application.
         after the course, it's all about us to use what we learn. I love the courses made it bychand. They are easy to follow, to understand To put in application.

        </Typography>
       <div className={classes.venue}>
         <span className={classes.heading}>
           Venue: 
         </span>
         <span className={classes.venueText}>
          33102, Abu Dhabi United Arab Emirates, AE
         </span>

       </div>
      </CardContent>
      <CardContent className={clsx(classes.zeroPadding,classes.thirdPart)}>
        <p
          // className="card-title"
          style={{
            paddingLeft: "11px",
            paddingRight: "7px",
            paddingTop: "7px",
            fontSize: "25px",
            fontWeight: 500,
            marginBottom: 20,
            textAlign: 'right',
          }}
        >
          {" "}
         Satruday 20 FEB
        </p>
        
       <div className={classes.venue}>
         <p className={classes.time}>
           9AM TO 2PM
         </p>

       </div>
       <div className={classes.viewDetailsButton}>
         <button className={classes.buttonDetails}>View Details</button>
       </div>
      </CardContent>
    </Card>
  );
}
