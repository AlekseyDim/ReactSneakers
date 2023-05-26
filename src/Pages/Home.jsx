import Card from '../Components/Card'
import Drawer from '../Components/Drawer';
import Header from '../Components/Header'

function Home({ orderItems, setOrderItems, isVisible, setIsVisible, drawerItems, setDrawerItems, sneakersArr }) {
  return (
    <>
      <Header isVisible={isVisible} setIsVisible={setIsVisible} />
      <Drawer drawerItems={drawerItems} setDrawerItems={setDrawerItems} isVisible={isVisible} setIsVisible={setIsVisible} orderItems={orderItems} setOrderItems={setOrderItems} />

      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="search-block">
          <img src="/img/search.png" width={18} height={18} alt="Search" />
          <input placeholder="Поиск..." />
        </div>

        <div className="ds-f">

          {/* {sneakersArr.map((elem, index) =>  <Card pDrawerItems={drawerItems} pSetDrawerItems={setDrawerItems} pTitle={elem} key={index}/>)} */}
          {sneakersArr.map((elem, index) => <Card pDrawerItems={drawerItems} pSetDrawerItems={setDrawerItems} pTitle={elem.title} pPrice={elem.price} pImg={elem.imageUrl} key={index} />)}


        </div>
      </div>
    </>
  )


}

export default Home;