import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';


function Header({ isVisible, setIsVisible }) {

    const dispatch = useDispatch();

    const addCash = () =>{
        dispatch({type:"ADD_CASH", payload:1})
    }

    const cash = useSelector(state=>state.cash)
    console.log(cash)

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
                    <span>{cash} руб</span>
                </li>
                <li>
                    {/* <button onClick={()=>}></button> */}
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