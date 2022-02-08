import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsContextProvider from './Contexts/ProductsContext';
import Header from './Components/Header/Header';
import BottomMenu from './Components/BottomMenu/BottomMenu';
import AddProduct from './Components/Admin/AddProduct';
import Products from './Components/Product/Products'
import EditProduct from './Components/Admin/EditProduct';
import ProductDetail from './Components/Product/ProductDetail/ProductDetail';

const MyRoutes = () => {
    return (
        <ProductsContextProvider>
            <BrowserRouter>
                <Header/>
                <BottomMenu/>
                <Routes>
                <Route path ='/add' element={<AddProduct />}/>
                <Route path='/' element={<Products />}/>
                <Route path ='/edit/:id' element={<EditProduct/>}/>
                <Route path='/detail/:id' element={<ProductDetail/>} />
                </Routes>
            </BrowserRouter>
        </ProductsContextProvider>
    );
};

export default MyRoutes;