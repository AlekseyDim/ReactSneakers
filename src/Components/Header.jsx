import {Link} from 'react-router-dom'


function Header({ isVisible, setIsVisible }) {
    return (
        <header>
            <Link className='link' to="/">
                <div>
                    <img width={40} height={40} src="/img/logo.png" alt="logo" />
                    <div>
                        <h3>React Sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul>
                <li className='cursor' onClick={() => setIsVisible(!isVisible)}>
                    <img width={18} height={18} src="/img/cart.png" alt="cart" />
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/fav.png" alt="fav" />
                </li>
                <Link to="orders">
                    <li>
                        <img width={18} height={18} src="/img/user.png" alt="user" />
                    </li>
                </Link>
            </ul>

        </header>
    )
}

export default Header;