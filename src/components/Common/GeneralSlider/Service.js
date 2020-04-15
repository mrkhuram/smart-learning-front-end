import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as routes from "../../../constants/routePaths";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from "@material-ui/lab/Rating";
import natureImg from "../../../assets/Images/homepageImages/nature.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    margin: "10px 10px"
  },
  zeroPadding: {
    padding: "4px"
  },
  description: {
    paddingLeft: "11px",
    paddingRight: "11px",
    paddingBottom: " 6px"
  },
  image: {
    borderRadius: "3px"
  }
});

export default function Service() {
  const classes = useStyles();

  return (
    <Link to={routes.Service}>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
          className={classes.image}
          image={natureImg}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.zeroPadding}>
          <div className="row service-row">
            <div className="col-2 p-0">
              <img
                className="rounded-circle img-fluid"
                style={{ height: "41px",marginTop:"6px",marginLeft:"6px" }}
                src={require("../../../assets/Images/saqii.jpg")}
                // src="https://scontent.fkhi10-1.fna.fbcdn.net/v/t1.0-9/48994275_252190439003234_3750715461226987520_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=E6Ui3CQhixEAX8cpIUr&_nc_ht=scontent.fkhi10-1.fna&oh=6a28d5d9831e6a914712910546c8d2be&oe=5EF919C0"
                alt="profile"
              />
            </div>
            <div className="col-5 p-0 name-col" style={{paddingTop:"9px"}}>
              <p className="name">Muhammad Ishaq</p>
              <p className="profession">MERN stack developer</p>
            </div>
            <div className="col-1 p-0"></div>
            <div className="col-3 p-0 rating-col">
              <Rating value={4} readOnly className="rating" />
              <span className="total">(255)</span>
            </div>
          </div>
          <div className="row service-desc">
            <div className="col-12">
              I am offering web design services with PSD file.
            </div>
            <div className="col-12 starting-from">
              Starting from<span className="price"> AED 150</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
