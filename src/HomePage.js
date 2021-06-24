import { Link } from "react-router-dom";
import Fish_background from "../src/fish_background.jpg";

export default function HomePage() {
  return (
    <div className="home">
      <h1 className="h1">Discover Fish Species</h1>

      <div className="link">
        <Link to="/fish-list">
          <button className="fish-button">See Fish List</button>
        </Link>
      </div>

      <img
        className="Fish_background"
        src={Fish_background}
        alt="Background with multiple fish in blue waters"
      />
    </div>
  );
}
