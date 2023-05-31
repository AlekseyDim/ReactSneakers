import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


// function Card({pTitle, pPrice, pImg, pDrawerItems, pSetDrawerItems}) {

//компонент карточки

const Card = ({pTitle, pPrice, pImg, pDrawerItems, pSetDrawerItems}) => {
    // const[isAdded, setAdded] = React.useState(false)
    const[itemsCount, setItemsCount] = React.useState(0)

    const[countFavorites, setCountFavorites] = React.useState(false)

    const dispatch = useDispatch();
    const cash = useSelector(state=>state.cash)

    function onAddToCart(){
        // setAdded(!isAdded)

        // if(pDrawerItems.indexOf({pTitle, pImg, pPrice}) != -1){
        //     pDrawerItems.filter((elem) => elem !== {pTitle, pImg, pPrice})
        // }

        pSetDrawerItems([...pDrawerItems, {pImg, pPrice, pTitle}])
        // console.log(pDrawerItems)
        dispatch({type: "ADD_CASH", payload: pPrice })
        // getCartItems(pDrawerItems)
        setItemsCount(itemsCount + 1)
    }

    function deleteItems(pTitle){
        setItemsCount(0)
        dispatch({type: "MINUS_CASH", payload: pPrice })

        
        pSetDrawerItems(pDrawerItems.filter((obj)=>pTitle !== obj.pTitle))
    }

    function onAddToFavorites(Img, Price, Title){
        setCountFavorites(!countFavorites);
        dispatch({type: "ADD_FAVORITES", payload: {img: Img, price: Price, title:Title} })

        console.log(Title)
        console.log(Img)

        

    }

    return(
        <div className="card">
        <div>
            {/* <img src='/img/unliked.png' width={32} height={32} alt="Unliked" /> */}
            <img className='heart' onClick={()=> onAddToFavorites(pImg, pPrice, pTitle)} src={countFavorites? '/img/heart-red.png' :'/img/heart.svg'} width={32} height={32} alt="Unliked" />

        </div>
        <img width={133} height={112} src={pImg} alt="Sneakers" />
        <h5>{pTitle}</h5>
        <div className="cardChildDiv">
            <div className="container">
                <span>Цена:</span>
                <b>{pPrice} руб.</b>
            </div>

            {/* <img className="button" onClick={()=> onAddToCart()} width={32} height={32} src={isAdded ? "/img/btn-checked.svg": "/img/plus.png"} alt="Plus" /> */}
            <div>
                <img className="button" onClick={()=> onAddToCart()} width={32} height={32} src={itemsCount !== 0 ? "/img/btn-checked.svg": "/img/plus.png"} alt="Plus" />
                {/* {itemsCount && <img className="button" onClick={()=>deleteItems(pTitle)} width={32} height={32} src={"/img/red-cross.png"} alt="Del" /> */}
                {itemsCount === 0 ?<></>:<img className="button" onClick={()=>deleteItems(pTitle)} width={32} height={32} src={"/img/red-cross.png"} alt="Del" />

                }   
            </div>

        </div>
            <p>Количество: {itemsCount}</p>
        </div>
    )
}

export default Card;

