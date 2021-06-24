import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import FishCard from "./FishCard";
import { species } from "./species";

const FishList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [list, setList] = useState(species);
  useEffect(() => {
    const filteredList = species.filter((item) => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    });
    setList(filteredList);
  }, [searchTerm]);

  return (
    <>
      <input
        className="input spacing"
        type="text"
        placeholder="Search your fish..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      ></input>

      <Link to="/">
        <button className="fish-button">Back Home</button>
      </Link>

      {list.map((item) => {
        return (
          <FishCard
            key={item.id}
            url={item.url}
            name={item.name}
            wiki={item.wiki}
          />
        );
      })}
    </>
  );
};

export default FishList;
