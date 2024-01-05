import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router";
import Favorites from "./pages/Favorites";
function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  const [cartOpened, setCartOpened] = React.useState(false);
//1
  React.useEffect(() => {
    axios
      .get("https://658b4ae3ba789a962238a4c8.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });

    axios
      .get("https://658b4ae3ba789a962238a4c8.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });

    axios
      .get("https://6595279b04335332df821264.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = async (obj) => {
    try{
          const {data} = await axios.post("https://658b4ae3ba789a962238a4c8.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, data]);}
  catch(err){
    alert('Не удалось добавить в корзину');
  }};
  
  const onRemoveItem = (id) => {
    axios.delete(`https://658b4ae3ba789a962238a4c8.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((items) => items.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try{
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://6595279b04335332df821264.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) => prev.filter((items) => items.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://6595279b04335332df821264.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    }catch(err){
    alert('Не удалось добавить в избранное');
  }};

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/favorites"
          element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
