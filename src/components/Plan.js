import "./Plan.css";

export default function Plan({ namePlan, price }) {
  return (
    <div className="planCard">
      <img src="./images/icon-music.svg" />
      <div className="planCard__self">
        <h6 className="planCard__name">{namePlan}</h6>
        <p className="planCard__price">{price}/year</p>
      </div>
      <a>Change</a>
    </div>
  );
}
