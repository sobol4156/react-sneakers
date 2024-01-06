import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router";
import Favorites from "./pages/Favorites";

export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isReady, setIsReady] = React.useState(true);
  //1
  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://658b4ae3ba789a962238a4c8.mockapi.io/cart"
      );

      const favoritesResponse = await axios.get(
        "https://6595279b04335332df821264.mockapi.io/favorites"
      );

      const itemsResponse = await axios.get(
        "https://658b4ae3ba789a962238a4c8.mockapi.io/items"
      );

      setIsReady(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((cartObj) => Number(cartObj.id) === Number(obj.id))) {
        axios.delete(
          `https://658b4ae3ba789a962238a4c8.mockapi.io/cart/${obj.id}`
        );
        setCartItems((prev) =>
          prev.filter((cartObj) => Number(cartObj.id) !== Number(obj.id))
        );
      } else {
        console.log(obj);
        axios.post("https://658b4ae3ba789a962238a4c8.mockapi.io/cart", obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (err) {
      alert("Не удалось добавить в корзину");
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://658b4ae3ba789a962238a4c8.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((items) => items.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://6595279b04335332df821264.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((items) => Number(items.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://6595279b04335332df821264.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (err) {
      alert("Не удалось добавить в избранное");
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        favorites,
        items,
        isItemAdded,
        setCartItems,
        onAddToCart,
        setCartOpened,
        onAddToFavorite,
      }}
    >
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
            exact
            path="/favorites"
            element={<Favorites onAddToFavorite={onAddToFavorite} />}
          />
          <Route
            exact
            path="/"
            element={
              <Home
                cartItems={cartItems}
                items={items}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isReady}
              />
            }
          />

          <Route
            exact
            path="/orders"
            element={<Orders />}
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
