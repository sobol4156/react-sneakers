import React from "react";
import Info from "./Info";
import { AppContext } from "../App";
import axios from "axios";

function Drawer({ onClose, onRemove, items = [] }) {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);
  const [isComplete, setIsComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://6595279b04335332df821264.mockapi.io/orders",
        { items: cartItems }
      );

      for(let i = 0; i<cartItems.length; i++){
        const item = cartItems[i]
        await axios.delete(`https://658b4ae3ba789a962238a4c8.mockapi.io/cart/${item.id}`);
        await delay(1000)
      }

      
      setOrderId(data.id);
      setIsComplete(true);
      setCartItems([]);
    } catch (err) {
      alert("Не удалось создать заказ!");
    }
    setIsLoading(false);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30">
          Корзина{" "}
          <img
            alt="bascket"
            onClick={onClose}
            className="cu-p"
            width={20}
            height={20}
            src="/img/btn-close.svg"
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    width={18}
                    height={18}
                    src="/img/btn-close.svg"
                    alt="Remove"
                  />
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
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isComplete
                ? `Ваш заказ №${Number(orderId) + 27571} уже начал собирать!`
                : "Добавьте хотя бы одну пару кроссовок"
            }
            image={isComplete ? "/img/close-box.jpg" : "/img/empty-box.png"}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
