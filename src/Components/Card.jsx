import React from 'react';

// function Card({pTitle, pPrice, pImg, pDrawerItems, pSetDrawerItems}) {

//компонент карточки

const Card = ({pTitle, pPrice, pImg, pDrawerItems, pSetDrawerItems}) => {
    // const[isAdded, setAdded] = React.useState(false)
    const[itemsCount, setItemsCount] = React.useState(0)


    function onAddToCart(){
        // setAdded(!isAdded)

        // if(pDrawerItems.indexOf({pTitle, pImg, pPrice}) != -1){
        //     pDrawerItems.filter((elem) => elem !== {pTitle, pImg, pPrice})
        // }
        pSetDrawerItems([...pDrawerItems, {pImg, pPrice, pTitle}])
        // getCartItems(pDrawerItems)
        setItemsCount(itemsCount + 1)
    }

    function deleteItems(pTitle){
        setItemsCount(0)
        
        pSetDrawerItems(pDrawerItems.filter((obj)=>pTitle !== obj.pTitle))
    }

    return(
        <div className="card">
        <div>
            {/* <img src='/img/unliked.png' width={32} height={32} alt="Unliked" /> */}
            <img src='/img/heart.svg' width={32} height={32} alt="Unliked" />

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

