import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


// function Card({pTitle, pPrice, pImg, pDrawerItems, pSetDrawerItems}) {

//компонент карточки

const Card = ({ pTitle, pPrice, pImg, pDrawerItems, pSetDrawerItems }) => {

    const [itemsCount, setItemsCount] = React.useState(0)

    const [visiableFavorites, setVisiableFavorites] = React.useState(false)

    const favorites = useSelector(state => state.favorites)


    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash)

    function onAddToCart() {

        pSetDrawerItems([...pDrawerItems, { pImg, pPrice, pTitle }])
        // console.log(pDrawerItems)
        dispatch({ type: "ADD_CASH", payload: pPrice })
        // getCartItems(pDrawerItems)
        setItemsCount(itemsCount + 1)
    }

    function deleteItems(pTitle) {
        setItemsCount(0)
        dispatch({ type: "MINUS_CASH", payload: pPrice })


        pSetDrawerItems(pDrawerItems.filter((obj) => pTitle !== obj.pTitle))
    }

    function onFavorites(Img, Price, Title) {

        console.log(visiableFavorites)
        if (!visiableFavorites) {

            setVisiableFavorites(true);
            dispatch({ type: "ADD_FAVORITES", payload: { img: Img, price: Price, title: Title } })

        } else {
            {favorites.filter((elem) => elem.title !== Title )}
            console.log(favorites)
            dispatch({ type: "DELETE_FAVORITES", payload: favorites })
            setVisiableFavorites(false);

        }
        console.log(Title)
        console.log(Img)
    }

    return (
        <div className="card">
            <div>

                <img className='heart' onClick={() => onFavorites(pImg, pPrice, pTitle)} src={(visiableFavorites ) ? '/img/heart-red.png' : '/img/heart.svg'} width={32} height={32} alt="Unliked" />

            </div>
            <img width={133} height={112} src={pImg} alt="Sneakers" />
            <h5>{pTitle}</h5>
            <div className="cardChildDiv">
                <div className="container">
                    <span>Цена:</span>
                    <b>{pPrice} руб.</b>
                </div>

                <div>
                    <img className="button" onClick={() => onAddToCart()} width={32} height={32} src={itemsCount !== 0 ? "/img/btn-checked.svg" : "/img/plus.png"} alt="Plus" />
                    {/* {itemsCount && <img className="button" onClick={()=>deleteItems(pTitle)} width={32} height={32} src={"/img/red-cross.png"} alt="Del" /> */}
                    {itemsCount === 0 ? <></> : <img className="button" onClick={() => deleteItems(pTitle)} width={32} height={32} src={"/img/red-cross.png"} alt="Del" />

                    }
                </div>

            </div>
            <p>Количество: {itemsCount}</p>
        </div>
    )
}

export default Card;

