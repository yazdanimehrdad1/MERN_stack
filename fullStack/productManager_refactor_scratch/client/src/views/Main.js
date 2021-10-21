import React, {useState} from "react";
import CreateProduct from "../components/CreateProduct";
import DisplayAll from "../components/DisplayProducts";




const Main = (props)=>{

    const [productList, setProductList] = useState([]);
    const [newProduct, setNewProduct] = useState({});

    console.log("ProductList from Main",productList)


                





    return(
        <div>
            <CreateProduct newProduct={newProduct} setNewProduct={setNewProduct} productList={productList} setProductList={setProductList}/>
            <DisplayAll newProduct={newProduct} setNewProduct={setNewProduct} productList={productList} setProductList={setProductList}/>
        </div>
    )
}


export default Main;