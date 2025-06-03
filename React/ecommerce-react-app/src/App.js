import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ListProductsCategory from './components/ListProductsCategory';
import ProductList from './components/ProductList';
import useOnlineStatus from './utils/useOnlineStatus';
function App() {

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return <h1>Please Check ur internet Connection</h1>
  }
  return (
    <>
    <Header/>
    <HeroSection/>
    <ListProductsCategory/>
    <ProductList/>
    </>
  );
}

export default App;
