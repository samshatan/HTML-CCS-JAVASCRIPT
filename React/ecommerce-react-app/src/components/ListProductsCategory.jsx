import ProductCategory from "./ProductCategory";


const ListProductsCategory = () =>{
    return (
        <>
            <section class="categories">
                <h1>Shop by Category</h1>
                <div class="categories-grid">
                    <ProductCategory productsCategoryDetails ={{name: 'Men', image: ''}}/>
                    <ProductCategory productsCategoryDetails ={{name: 'Women', image: ''}}/>
                    <ProductCategory productsCategoryDetails ={{name: 'Kids', image: ''}}/>
                    <ProductCategory productsCategoryDetails ={{name: 'Home', image: ''}}/>
                    <ProductCategory productsCategoryDetails ={{name: 'Beauty', image: ''}}/>
                </div>
            </section>
        </>
    );
};

export default ListProductsCategory;