import React from "react";
import styles from "./Card.module.scss";

function Card({
  id,
  onFavorite,
  imageUrl,
  title,
  price,
  onPlus,
  favorited = false,
}) {
  const [isAdded, setIsAdded] = React.useState(true);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ imageUrl, title, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({id, imageUrl, title, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          width={18}
          height={18}
          src={isFavorite ? "/img/like.svg" : "/img/unlike.svg"}
          alt="Unliked"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          width={isAdded ? 18 : 24}
          height={isAdded ? 18 : 24}
          src={isAdded ? "/img/addButton.svg" : "/img/btn-cheked.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
