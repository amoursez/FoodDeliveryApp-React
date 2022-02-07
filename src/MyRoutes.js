import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsContextProvider from './Contexts/ProductsContext';
import Header from './Components/Header/Header';
import BottomMenu from './Components/BottomMenu/BottomMenu';
import AddProduct from './Components/Admin/AddProduct';
import Products from './Components/Product/Products'

const MyRoutes = () => {
    return (
        <ProductsContextProvider>
            <BrowserRouter>
                <Header/>
                <BottomMenu/>
                <Routes>
                <Route path ='/add' element={<AddProduct />}/>
                <Route path='/' element={<Products />}/>
                </Routes>
            </BrowserRouter>
        </ProductsContextProvider>
    );
};

export default MyRoutes;