import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home'
import Orders from './Pages/Orders'
import Form from './Pages/Form'




// const sneakersArr = [1, 2, 3, 4];
const sneakersArr = [
  {
    title: 'Мужские кроссовки Nike',
    price: 12999,
    imageUrl: '/img/sneakers/1.png'
  },
  {
    title: 'Мужские кроссовки Nike Air Max',
    price: 15600,
    imageUrl: './img/sneakers/2.png'
  },
  {
    title: 'Мужские кроссовки Nike Blazer',
    price: 8499,
    imageUrl: '/img/sneakers/3.png'
  },
  {
    title: 'Мужские кроссовки Puma X Aka',
    price: 8999,
    imageUrl: './img/sneakers/4.png'
  }
];


function App() {

  const [isVisible, setIsVisible] = React.useState(false);

  const [drawerItems, setDrawerItems] = React.useState([]);

  const [orderItems, setOrderItems] = React.useState([]);

  // function getCartItems(pDrawerItems){

  //   setDrawerItems(pDrawerItems)
  // }

  return (

    <div className="wrapper">
      <Routes>
        <Route path='/' element={<Home orderItems={orderItems} setOrderItems={setOrderItems} isVisible={isVisible} setIsVisible={setIsVisible}
          drawerItems={drawerItems} setDrawerItems={setDrawerItems} sneakersArr={sneakersArr} />} />

        <Route path='/orders' element={<Orders isVisible={isVisible} setIsVisible={setIsVisible} drawerItems={drawerItems} orderItems={orderItems} setOrderItems={setOrderItems} />}/>

        <Route path='/form' element={<Form/>}/>
        
      </Routes>
    </div>
    //   <div className="wrapper">
    //   <header>
    //     <div>
    //       <img width={40} height={40} src="/img/logo.png" />
    //       <div>
    //         <h3>React Sneakers</h3>
    //         <p>Магазин лучших кроссовок</p>
    //       </div>
    //     </div>
    //     <ul>
    //       <li className='cursor' onClick={()=>setIsVisible(!isVisible)}>
    //         <img width={18} height={18} src="/img/cart.png" />
    //         <span>1205 руб.</span>
    //       </li>
    //       <li>
    //         <img width={18} height={18} src="/img/fav.png" />
    //       </li>

    //       <li>
    //         <img width={18} height={18} src="/img/user.png" />
    //       </li>
    //     </ul>
    //   </header>

    //  <Drawer drawerItems={drawerItems} setDrawerItems={setDrawerItems} isVisible={isVisible} setIsVisible={setIsVisible} orderItems={orderItems} setOrderItems={setOrderItems} />

    //   <div className="content">
    //         <h1>Все кроссовки</h1>
    //         <div className="search-block">
    //             <img src="/img/search.png" width={18} height={18} alt="Search" />
    //             <input placeholder="Поиск..." />
    //         </div>

    //     <div className="ds-f">

    //       {/* {sneakersArr.map((elem, index) =>  <Card pDrawerItems={drawerItems} pSetDrawerItems={setDrawerItems} pTitle={elem} key={index}/>)} */}
    //       {sneakersArr.map((elem, index) =>  <Card  pDrawerItems={drawerItems} pSetDrawerItems={setDrawerItems} pTitle={elem.title} pPrice={elem.price} pImg={elem.imageUrl} key={index}/>)}


    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
