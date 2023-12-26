import React from 'react'
import styles from './Card.module.scss'


function Card(props) {

    const [isAdded, setIsAdded] = React.useState(true);

    const onClickPlus = () => {
        setIsAdded(!isAdded)
    }

    

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onClickFavorite}>
                <img width={18} height={18} src="/img/unlike.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} width={isAdded ? 18 : 24} height={isAdded ? 18 : 24} src={isAdded ? '/img/addButton.svg' : '/img/btn-cheked.svg'} alt="Plus" />
            </div>
        </div>
    )
}

export default Card