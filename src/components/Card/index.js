import React from "react";
import styles from "./Card.module.scss";
import { AppContext } from "../../App";
import ContentLoader from "react-content-loader"

function Card({
  id,
  onFavorite,
  imageUrl,
  title,
  price,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const {isItemAdded} = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  console.log(title,isItemAdded(id))

  const onClickPlus = () => {
    onPlus({id, imageUrl, title, price });
  };

  const onClickFavorite = () => {
    onFavorite({ id, imageUrl, title, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        
          (
          <ContentLoader
            speed={2}
            width={160}
            height={260}
            viewBox="0 0 150 260"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            
          >
            <rect x="0" y="123" rx="7" ry="7" width="75" height="15" />
            <rect x="0" y="1" rx="10" ry="10" width="160" height="90" />
            <rect x="0" y="100" rx="7" ry="7" width="160" height="15" />
            <rect x="0" y="144" rx="7" ry="7" width="75" height="25" />
            <rect x="115" y="135" rx="7" ry="7" width="35" height="35" />
          </ContentLoader>
          )
        
      ) : (
        <>
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
              width={isItemAdded(id) ? 24 : 18}
              height={isItemAdded(id) ? 24 : 18}
              src={isItemAdded(id) ? "/img/btn-cheked.svg" : "/img/addButton.svg"}
              alt="Plus"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
