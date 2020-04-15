import React, { Fragment } from "react";
import "./scss/_timedown.scss";
import Countdown from "react-countdown";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  // Render a countdown
  return (
    <Fragment>
      <div className="time-box position-relative">
        <h3>Price $21 <span className="original-amnt">$25</span></h3>
        <div className="row">
            <div className="col-3 timer-entity"><span>{days}</span><span className="entity">Days</span></div>
            <div className="col-3 timer-entity"><span>{hours}</span><span className="entity">Hrs</span></div>
            <div className="col-3 timer-entity"><span>{minutes}</span><span className="entity">Mins</span></div>
            <div className="col-3 timer-entity"><span>{seconds}</span><span className="entity">Secs</span></div>            
        </div>
        <div className="discount">
          15% OFF
        </div>
      </div>
      <div className="btn-div">
        <button className="btn mt-1"><AddShoppingCartIcon /> <span>Add to Cart</span></button><br />
        <button className="btn btn-buy mt-1">Buy Now</button>
      </div>
    </Fragment>
  );
};

const TimeDown = props => (
  <div>
    <Countdown date={Date.now() + 500000000} renderer={renderer} />
  </div>
);
export default TimeDown;
