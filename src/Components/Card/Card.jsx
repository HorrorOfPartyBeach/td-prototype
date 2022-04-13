import { Button } from "../Button/Button";
import "./Card.css";

export const Card = ({ setChosenColour }) => {
  const handleClick = (colour) => {
    return setChosenColour(colour);
  };

  return (
    <div className="card">
      <div className="card-contents">
        <div className="card-title">Head Colour</div>
        <Button text="Blue" onClick={() => handleClick("blue")} />
        <Button text="Yellow" onClick={() => handleClick("yellow")} />
      </div>
    </div>
  );
};
