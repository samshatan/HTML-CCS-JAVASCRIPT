// import ProductCard from "./ProductCard"

// const ProductList = () =>{
//   // function hadlerButton(){
//   //   products = products.filter((product) => product.rating >4);
//   // }
//   return (
//     <section className="products">
//       <h1>Trending Products</h1>
//       {/* <button onClick={hadlerButton}>Top Rating</button> */}
//       <div className="products-grid">
//         <ProductCard/>
//       </div>
//     </section>
//   )
// }
// export default ProductList;
import useOnlineStatus from '../utils/useOnlineStatus';
import useProductList from '../utils/useProductList';
import ProductCard from './ProductCard';
// import products from '../data/products';
import { useEffect, useState } from 'react';

const ProductList = () => {
  const productList = useProductList();
  console.log(productList);
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);
  let [searchBar, setSearchBar] = useState('');
  let [filterProductList, setFilterProductList] = useState(productList);


  // const fetchData = async () => {
  //   const response = await fetch(
  //     'https://682755e76b7628c5290ff8b1.mockapi.io/api/v1/products/products'
  //   );
  //   const products = await response.json();
  //   setProductList(products);
  //   setFilterProductList(products);
  // };

  // useEffect(() => {
  //   fetchData()/* callback function */;
  // },[]/*dependency array */); /*if we did not pass dependecy array then it get called every time when it render so when we refresh then it call fetch and it change state then again it re render */

  useEffect(() =>{
    setFilterProductList(productList);
  },[productList]);/* it get twice because first is mount of productlist and second time it render products */

  function handleFilterButtonClick() {
    const filterProductList = productList.filter((product) => product.rating > 4);
    setFilterProductList(filterProductList);
  }

  function handleSearchFilter(){
    const filterProductList = productList.filter((product) => product.name.toLowerCase().includes(searchBar.toLowerCase()));
    setFilterProductList(filterProductList);
  }

  return (
    <section className='products'>
      <h1>Trending Products</h1>
      <div className='search-filter'>
        <input
          className='search-filter-input'
          type='search'
          value={searchBar}
          onChange={(e) => setSearchBar(e.target.value)}
        />
        <button className='search-button' onClick={handleSearchFilter}>
          Search
        </button>
        <button onClick={handleFilterButtonClick} className='filter-button'>
          Filter Top Rated Products
        </button>
        {/* <button className='reset-button' onClick={handleResetButton}>
          Reset
        </button> */}
      </div>
      <div className='products-grid'>
        {filterProductList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
