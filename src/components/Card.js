import Button from "./Button";
import "./Card.css";
import Plan from "./Plan.js";

export default function Card() {
  return (
    <div className="card">
      <img
        alt="imagedfd"
        className="card__image"
        src="./images/illustration-hero.svg"
      />
      <div className="card__text">
        <h4 className="card__textTitle">Order Summary</h4>
        <p className="card__textInfo">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <Plan namePlan="Annual Plan" price="$59,99" />
        <Button />
        <p className="card__cancelOrder">Cancel Order</p>
      </div>
    </div>
  );
}
