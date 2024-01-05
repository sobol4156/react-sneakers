import Card from "../components/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : `Все кроссовки`}
        </h1>
        <div className="search-block d-flex">
          <img
            className="opacity-5 mt-10"
            width={18}
            height={18}
            src="/img/search.svg"
            alt="Search"
          />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              width={18}
              height={18}
              src="/img/btn-close.svg"
              alt="Clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          ></input>
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {items
          .filter((items) => items.title.toLowerCase().includes(searchValue))
          .map((items, index) => (
            <Card
              key={index}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              {...items}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
