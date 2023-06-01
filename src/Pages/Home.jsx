import Card from '../Components/Card';
import Drawer from '../Components/Drawer';
import Header from '../Components/Header';
import { useDispatch, useSelector } from 'react-redux';




function Home({ orderItems, setOrderItems, isVisible, setIsVisible, drawerItems, setDrawerItems, sneakersArr}) {

  const dispatch = useDispatch();
  const inputValue = useSelector(state=>state.inputValue)

  function onChangeInput(event){
    dispatch({type: "CHANGE_INPUT", payload: event.target.value
  })
  console.log(inputValue);

  }

  // function clearInput(){
  //   dispatch({type: "CLEAR_INPUT" })

  // }

  return (
    <>
      <Header isVisible={isVisible} setIsVisible={setIsVisible} />
      <Drawer drawerItems={drawerItems} setDrawerItems={setDrawerItems} isVisible={isVisible} setIsVisible={setIsVisible} orderItems={orderItems} setOrderItems={setOrderItems} />

      <div className="content">
        <h1>{inputValue? `Поиск по: ${inputValue}` : 'Все кроссовки'}</h1>
        <div className="search-block">

          <img className='search-img' src="/img/search.png" width={18} height={18} alt="Search" />

          <input value = {inputValue} onChange={(event)=>onChangeInput(event)} placeholder="Поиск..." />
          {/* удаление надписи в input  */}
          <img className={inputValue? 'cross-img': 'display-none'}  onClick={()=>dispatch({type: "CLEAR_INPUT"})} src="/img/delete.png"  width={18} height={18} alt="delete" />

        </div>

        <div className="ds-f">

          {/* {sneakersArr.map((elem, index) =>  <Card pDrawerItems={drawerItems} pSetDrawerItems={setDrawerItems} pTitle={elem} key={index}/>)} */}
          {sneakersArr.filter((elem) => elem.title.toLowerCase().includes(inputValue.toLowerCase())).map((elem, index) => <Card pDrawerItems={drawerItems} pSetDrawerItems={setDrawerItems} 
              pTitle={elem.title} pPrice={elem.price} pImg={elem.imageUrl} key={index} />)}


        </div>
      </div>
    </>
  )


}

export default Home;