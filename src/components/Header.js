import React from "react";
import { Link } from "react-router-dom";


function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logoSneakers.jpg" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/basket.svg" alt="close" />
          <span>1205 руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              className="mr-20 cu-p"
              width={18}
              height={18}
              src="/img/favorites.svg"
              alt="favorites"
            ></img>
          </Link>
        </li>
        <li>
          <img width={18} height={18} alt="close" src="/img/userProfile.svg" />
        </li>
      </ul>
    </header>
  );
}
export default Header;
