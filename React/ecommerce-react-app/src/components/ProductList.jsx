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
import ProductCard from './ProductCard';
// import products from '../data/products';
import { useEffect, useState } from 'react';

const ProductList = () => {
  let [productList, setProductList] = useState([]);
  let [searchBar, setSearchBar] = useState('');

  const fetchData = async () => {
    const response = await fetch(
      'https://682755e76b7628c5290ff8b1.mockapi.io/api/v1/products/products'
    );
    const products = await response.json();
    setProductList(products);
  };

  useEffect(() => {
    fetchData()/* callback function */;
  },[]/*dependency array */); /*if we did not pass dependecy array then it get called every time when it render so when we refresh then it call fetch and it change state then again it re render */

  useEffect(() =>{
    console.log('hello');
  });/* it get twice because first is mount of productlist and second time it render products */

  function handleFilterButtonClick() {
    productList = productList.filter((product) => product.rating > 4);
    setProductList(productList);
  }

  function handleSearchClothes(){
    productList = productList.filter((product) => product.name.toLowerCase().includes(searchBar.toLowerCase()));
    setProductList(productList);
  }

  return (
    <section className='products'>
      <h1>Trending Products</h1>
      <div>
        <input type="search" placeholder="Search for products..." value={searchBar} onChange={(ele) => setSearchBar(ele.target.value)} />
        <button onClick={handleSearchClothes}>Search Filter</button>
      </div>
      <button onClick={handleFilterButtonClick} className='filter-button'>
        Filter Top Rated Products
      </button>
      <div className='products-grid'>
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
