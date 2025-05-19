import ProductCategory from "./ProductCategory";
import productCategories from "../data/product-category";

const ListProductsCategory = () =>{
    return (
        <>
            <section className="categories">
                <h1>Shop by Category</h1>
                <div className="categories-grid">
                    {productCategories.map((productCategory, index) => (
                        <ProductCategory key= {index} productsCategoryDetails = {productCategory}/>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ListProductsCategory;