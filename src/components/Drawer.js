function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
        <div className='drawer'>
            <h2 className='mb-30'>Корзина <img className='cu-p' width={20} height={20} src='/img/btn-close.svg' /></h2>

            <div className='items'>
                <div className='cartItem d-flex align-center mb-20'>

                    <img width={70} height={70} className='mr-15' src='/sneakers/s1.jpg' />

                    <div className='mr-20 '>
                        <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <b>19 999 руб.</b>
                    </div>
                    <img className='removeBtn' width={24} height={24} src='/img/btn-close.svg' alt='Remove' />
                </div>
                <div className='cartItem d-flex align-center'>

                    <img width={70} height={70} className='mr-15' src='/sneakers/s3.jpg' />

                    <div className='mr-20 '>
                        <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <b>19 999 руб.</b>
                    </div>
                    <img className='removeBtn' width={24} height={24} src='/img/btn-close.svg' alt='Remove' />
                </div>                    <div className='cartItem d-flex align-center'>

                    <img width={70} height={70} className='mr-15' src='/sneakers/s5.jpg' />
                    <div className='mr-20 '>
                        <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <b>19 999 руб.</b>
                    </div>
                    <img className='removeBtn' width={24} height={24} src='/img/btn-close.svg' alt='Remove' />
                </div>
                <div className='cartItem d-flex align-center mb-20'>

                    <img width={70} height={70} className='mr-15' src='/sneakers/s1.jpg' />

                    <div className='mr-20 '>
                        <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <b>19 999 руб.</b>
                    </div>
                    <img className='removeBtn' width={24} height={24} src='/img/btn-close.svg' alt='Remove' />
                </div>

            </div>




            <div className='cartTotalBlock '>
                <ul >
                    <li>
                        <span>Итого</span>
                        <div></div>
                        <b>21 498 руб. </b>
                    </li>
                    <li>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1074 руб. </b>
                    </li>
                </ul>
                <button className='greenButton'>Оформить заказ </button>
            </div>
        </div>
        </div>
    )
}

export default Drawer