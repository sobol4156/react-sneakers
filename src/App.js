import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from './components/Drawer'
import React from "react";


function App() {
    const [items, setItems] = React.useState([])

    React.useEffect(() => {
        fetch('https://658b4ae3ba789a962238a4c8.mockapi.io/items').then(res => {
            return res.json()
        }).then(json => {
            setItems(json)
        })
    }, [])


    const [cartOpened, setCartOpened] = React.useState(false)
    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
            <Header onClickCart={() => setCartOpened(true)} />
            <div className="content p-40">
                <div className="d-flex align-center mb-40 justify-between">
                    <h1 >Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img className="opacity-5 mt-10" width={18} height={18} src="/img/search.svg" alt="Search" />
                        <input placeholder="Поиск..."></input>
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {items.map((a) => (
                        <Card
                            title={a.name}
                            price={a.price}
                            imageUrl={a.imageUrl}
                            onClickFavorite={() => console.log(a)}
                            onClickPlus={() => console.log(a)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;