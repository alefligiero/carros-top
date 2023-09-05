import "./styles.css";
import carImg from "../../assets/car.png";
import Button from "../Button";

export default function CarCatalogCard() {
  return (
    <div className="ct-catalog-card">
      <div className="ct-catalog-card-top">
        <img src={carImg} alt="car" />
      </div>
      <div className="ct-catalog-card-bottom">
        <h3>Audi Supra TT</h3>
        <p>
          Lorem, ipsum dolor sit amet contetur adipisicing elit. 
        </p>
      </div>
      <Button />
    </div>
  );
}
