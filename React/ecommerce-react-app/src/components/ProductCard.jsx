const ProductCard = (props) =>{
  const product = props.product;
//   return (
//     <>
//       <div className="product-card">
//         <img src="./images/product1.avif" alt="" />
//         <h3>Sports Suit</h3>
//         <div className="product-info">
//           <p>599/-</p>
//           <button>Add to Cart</button>
//         </div>
//       </div>
//       <div class="product-card">
//         <img src="./images/product2.avif" alt="" />
//         <h3>Sports Suit</h3>
//         <div class="product-info">
//           <p>599/-</p>
//           <button>Add to Cart</button>
//         </div>
//       </div>
//       <div class="product-card">
//         <img src="./images/product3.avif" alt="" />
//         <h3>Sports Suit</h3>
//         <div class="product-info">
//           <p>599/-</p>
//           <button>Add to Cart</button>
//         </div>
//       </div>

//       <div class="product-card">
//         <img src="./images/product4.avif" alt="" />
//         <h3>Sports Suit</h3>
//         <div class="product-info">
//           <p>599/-</p>
//           <button>Add to Cart</button>
//         </div>
//       </div>

//       <div class="product-card">
//         <img src="./images/product5.avif" alt="" />
//         <h3>Sports Suit</h3>
//         <div class="product-info">
//           <p>599/-</p>
//           <button>Add to Cart</button>
//         </div>
//       </div>

//       <div class="product-card">
//         <img src="./images/product6.avif" alt="" />
//         <h3>Sports Suit</h3>
//         <div class="product-info">
//           <p>599/-</p>
//           <button>Add to Cart</button>
//         </div>
//       </div>

//       <div class="product-card">
//         <img src="./images/product7.avif" alt="" />
//         <h3>Sports Suit</h3>
//         <div class="product-info">
//           <p>599/-</p>
//           <button>Add to Cart</button>
//         </div>
//       </div>

//       <div class="product-card">
//         <img src="./images/product8.avif" alt="" />
//         <h3>Sports Suit</h3>
//         <div class="product-info">
//           <p>599/-</p>
//           <button>Add to Cart</button>
//         </div>
//       </div>

//       <div class="product-card">
//         <img src="./images/product9.avif" alt="" />
//         <h3>Sports Suit</h3>
//         <div class="product-info">
//           <p>599/-</p>
//           <button>Add to Cart</button>
//         </div>
//       </div>

//       <div class="product-card">
//         <img src="./images/product10.avif" alt="" />
//         <h3>Sports Suit</h3>
//         <div class="product-info">
//           <p>599/-</p>
//           <button>Add to Cart</button>
//         </div>
//       </div>
//     </>
//   )
// }
  return (
    <div className='product-card'>
      <img src={product.image} alt='' />
      <h3>{product.name}</h3>
      <div className='product-info'>
        <p>{product.price / 100}/-</p>
        <p>{product.rating}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};
export default ProductCard;