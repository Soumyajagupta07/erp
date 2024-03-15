import React, { useState, useEffect } from "react";
import '../../css/AddProduct.css'

function AddProduct({ sendDataToParent, selectedProductForModify }) {
    const [productDetail, setProductDetail] = useState({
        id: null,
        img_source: "",
        pro_name: "",
        brand: "",
        pro_category: "Select Category",
        stock: null,
        price: null
    });

    useEffect(() => {
        // Populate form fields with details of selected product for modification
        if (selectedProductForModify) {
            setProductDetail(selectedProductForModify);
        }
    }, [selectedProductForModify]);

    function getData(event) {
        setProductDetail(prevValue => ({
            ...prevValue,
            [event.target.id]: event.target.value
        }));
    }

    function submitForm(event) {
        event.preventDefault();
        sendDataToParent(productDetail);
        setProductDetail({
            id: null,
            img_source: "",
            pro_name: "",
            brand: "",
            pro_category: "Select Category",
            stock: null,
            price: null
        });
    }

    return (
        <div id="AddProduct">
            <h1>{selectedProductForModify ? "Modify Product" : "Add Product"} Form</h1>
            <form action="" onSubmit={submitForm} >
                <label htmlFor="img_url">Image URL: </label>
                <input type="text" value={productDetail.img_source} onChange={getData} id="img_source" />
                <br />
                <br />
                <label htmlFor="id">Product Id: </label>
                <input type="number" value={productDetail.id} onChange={getData} id="id" />
                <br />
                <br />
                <label htmlFor="pro_name">Product Name: </label>
                <input type="text" value={productDetail.pro_name} onChange={getData} id="pro_name" />
                <br />
                <br />
                <label htmlFor="brand">Brand:  </label>
                <input type="text" value={productDetail.brand} onChange={getData} id="brand" />
                <br />
                <br />
                <label htmlFor="pro_category">Category:  </label>
                <select value={productDetail.pro_category} onChange={getData} id="pro_category">
                    <option value="Select Category">Select Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Apparel">Apparel</option>
                </select>
                <br />
                <br />
                <label htmlFor="stock">Stock:  </label>
                <input type="number" value={productDetail.stock} onChange={getData} id="stock" />
                <br />
                <br />
                <label htmlFor="price">Price(in Rupees):  </label>
                <input type="number" value={productDetail.price} onChange={getData} id="price" />
                <br />
                <br />
                <button type="submit" className="submit_button">{selectedProductForModify ? "Update" : "Add"}</button>
            </form>
        </div>
    )
}

export default AddProduct;