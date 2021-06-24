import "./styles.css";
import { Link } from "react-router-dom";


const FishCard = ({ name, url, wiki }) => {
  return (
    <div className="card spacing">
      <img src={url} alt={name} style={{ width: "250px", height: "auto" }} />
      <div className="name">{name}</div>

      <div className="wiki-link">
        <a href={wiki} target="_blank" style={{ textDecoration: 'none', color: "yellowgreen" }}>
          Learn more in Wikipedia
        </a>
      </div>
    </div>
  );
};
export default FishCard;
