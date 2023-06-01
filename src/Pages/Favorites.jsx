import Header from "../Components/Header";
import { useDispatch, useSelector } from 'react-redux';


function Favorites() {
    const favorites = useSelector(state => state.favorites)
    console.log({ favorites })

    return (
        <>
            <Header />
            <div className="Favorites" >
            <h2>Мои любимые товары:</h2>
            {favorites.map((obj, index) =>
                <div className="favorites" key={index}>

                    <div style={{ backgroundImage: `url(${obj.img} )` }} className="favoriteImg">
                    </div>
                    <div>
                        <p>{obj.title}</p>
                        <b>{obj.price} руб.</b>
                    </div>
                </div>
            )
            }
        </div>

        </>
    )
}


export default Favorites;