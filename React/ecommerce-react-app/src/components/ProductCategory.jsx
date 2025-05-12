function ProductCategory(props) {
    const {name,image} = props.productsCategoryDetails;
    return(
        <>
            <div class="category">
                <img src={image} alt="" />
                <h3>{name}</h3>
            </div>
        </>
    )
}
export default ProductCategory;