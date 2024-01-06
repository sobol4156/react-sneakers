import React from "react";
import { AppContext } from "../App";
import Card from "../components/Card";

function Favorites({ onAddToFavorite}) {
const {favorites} = React.useContext(AppContext)


  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorites
          .map((items, index) => (
            <Card
              key={index}
              favorited={true}
              onFavorite={onAddToFavorite}
              {...items}
            />
          ))}</div>
    </div>
  );
}

export default Favorites;
