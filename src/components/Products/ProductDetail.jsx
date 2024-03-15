import React, { useState, useEffect } from "react";
import '../../css/ProductDetail.css';
import product_data from "../../utils/mock_data_products";
import ProductCard from "./ProductCard";
import '../../css/ProCardContainer.css';
import AddProduct from "./AddProduct";
import { faPlus, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../css/EmptyCard.css';

function ProductDetail({ updateProductList }) {
    const [showProductForm, setShowProductForm] = useState(false);
    const [productList, setProductList] = useState([]);
    const [originalProductList, setOriginalProductList] = useState([]);
    const [deleteProductId, setDeleteProductId] = useState("");
    const [deletedProductIds, setDeletedProductIds] = useState([]);
    const [selectedProductForModify, setSelectedProductForModify] = useState(null);

    // Initialize the product list when the component mounts
    useEffect(() => {
        setProductList(product_data);
        setOriginalProductList(product_data);
    }, []);

    // Update product list when deletedProductIds changes
    useEffect(() => {
        const updatedProductList = originalProductList.filter(product => !deletedProductIds.includes(product.id));
        setProductList(updatedProductList);
    }, [deletedProductIds, originalProductList]);

    function showAddProduct() {
        setShowProductForm(true);
    }

    function hideProductForm() {
        setShowProductForm(false);
        setSelectedProductForModify(null); // Reset selected product when form is closed
    }

    function handleDataFromChild(data) {
        // Check if the product being added is new or modified
        if (selectedProductForModify) {
            // Modify the existing product
            const updatedProductList = productList.map(product => {
                if (product.id === selectedProductForModify.id) {
                    return { ...data, id: selectedProductForModify.id }; // Keep the original ID
                }
                return product;
            });
            setProductList(updatedProductList);
            setSelectedProductForModify(null);
        } else {
            // Add the new product
            setOriginalProductList([...originalProductList, data]);
            setProductList([...productList, data]);
        }
    }

    function changeFilter(event) {
        let filteredProductList;
        if (event.target.value === "All") {
            filteredProductList = originalProductList.filter(
                (product) => !deletedProductIds.includes(product.id)
            );
        } else {
            filteredProductList = originalProductList.filter(
                (product) => product.pro_category === event.target.value && !deletedProductIds.includes(product.id)
            );
        }
        setProductList(filteredProductList);
    }

    function deleteProduct() {
        const productIdToDelete = parseInt(deleteProductId);
        if (!isNaN(productIdToDelete) && !deletedProductIds.includes(productIdToDelete)) {
            setDeletedProductIds([...deletedProductIds, productIdToDelete]);
        }
        setDeleteProductId("");
    }

    function modifyProduct() {
        // Find the product to modify by ID
        alert("Scroll down to modify product")
        const productToModify = productList.find(product => product.id === parseInt(deleteProductId));
        if (productToModify) {
            // Set the selected product for modification
            setSelectedProductForModify(productToModify);
            // Show the product form
            setShowProductForm(true);
        } else {
            alert("Product not found!");
        }
    }

    return (
        <div className="ProductDetail">
            <h1>Explore Products</h1>

            <div className="controller">
                <div className="manipulate_products">
                    <input type="text" placeholder="Enter Product ID to delete or modify" value={deleteProductId} onChange={(e) => setDeleteProductId(e.target.value)} style={{ width: "230px" }} /> <br /><br />
                    <div className="modify_delete">
                        <button onClick={modifyProduct} title="modify product"><FontAwesomeIcon icon={faPen} /></button>
                        <button onClick={deleteProduct} title="delete product"><FontAwesomeIcon icon={faTrash} /></button>
                    </div>

                </div>

                <select name="" id="category" onChange={changeFilter}>
                    <option value="All">All</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Groceries">Groceries</option>
                </select>
            </div>
            <div className="ProCardContainer">
                {productList.map((product) => (
                    <ProductCard
                        key={product.id}
                        pro_id={product.id}
                        pro_img={product.img_source}
                        name={product.pro_name}
                        price={product.price}
                        brand={product.brand}
                        stock={product.stock}
                        category={product.pro_category}
                    />
                ))}
                <div className="EmptyCard">
                    <button onClick={showAddProduct}>
                        <FontAwesomeIcon
                            icon={faPlus}
                            style={{ color: "rgb(59,172,134)", fontSize: "50px" }}
                        />
                    </button>
                </div>
            </div>
            {showProductForm && (
                <>
                    <AddProduct sendDataToParent={handleDataFromChild} selectedProductForModify={selectedProductForModify} /><br />
                    <button onClick={hideProductForm} className="close_addProduct_button">Close form</button>
                </>
            )}
        </div>
    )
}

export default ProductDetail;