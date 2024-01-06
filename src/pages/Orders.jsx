
import React from "react";
import Card from "../components/Card";
import axios from "axios";


function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function getOrders() {
      try {      const { data } = await axios.get(
        "https://6595279b04335332df821264.mockapi.io/orders"
      );
      setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
      console.log(data);
      setIsLoading(false);} catch (error) {
        alert('Ошибка при запросе заказов');
        console.lof(error);
      }
    }
    getOrders();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((items, index) => (
            <Card
            key={index}

            loading={isLoading}
            {...items}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
