import React from "react";
import { AppContext } from "../App";

const Info = ({ image, title, description }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className>
      <div className="cartEmpty d-flex align-center justify-center flex-column flex">
        <img className="mb-20 " width="350px" src={image} alt="Empty" />
        <h2>{title}</h2>
        <p className="opacity-6">{description}</p>
        <button  onClick={() => setCartOpened(false)} className="greenButton ">
          Вернуться назад
        </button>
      </div>
    </div>
  );
};

export default Info;
