function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img width={18} height={18} src="/img/unlike.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src="/sneakers/s1.jpg" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/addButton.svg" alt="Plus" />
                </button>
            </div>
        </div>
    )
}

export default Card