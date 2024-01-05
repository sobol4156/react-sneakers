

function Drawer({ onClose, onRemove, items = [] }) {

    return (
        <div className="overlay">
            <div className='drawer'>
                <h2 className='mb-30'>Корзина <img alt="bascket" onClick={onClose} className='cu-p' width={20} height={20} src='/img/btn-close.svg' /></h2>

                <div className="items">
                    {items.map((obj) => (
                        <div className="cartItem d-flex align-center mb-20">
                            <div
                                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                                className="cartItemImg"></div>
                            <div className="mr-20 flex">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price} руб.</b>
                            </div>
                            <img onClick={() => onRemove(obj.id)} width={24} height={24} className="removeBtn" src="/img/btn-close.svg" alt="Remove" />
                        </div>
                    ))}
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className="greenButton">
                        Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;