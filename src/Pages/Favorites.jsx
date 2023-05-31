import Header from "../Components/Header";
import { useDispatch, useSelector } from 'react-redux';


function Favorites() {
    const favorites = useSelector(state => state.favorites)
    console.log({ favorites })

    return (
        <>
            <Header />
            <h2>Мои любимые товары:</h2>

            <div >
                {favorites.map((obj, index) =>
                    <div key={index}>
                        <p>{obj.title}</p>

                        <div style={{ backgroundImage: `url(${obj.img} )` }}
                            className="favoriteImg"
                            >
                        </div>
                        <div>
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