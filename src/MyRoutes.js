import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsContextProvider from './Contexts/ProductsContext';
import Header from './Components/Header/Header';
import BottomMenu from './Components/BottomMenu/BottomMenu';
import AddProduct from './Components/Admin/AddProduct';
import Products from './Components/Product/Products'
import EditProduct from './Components/Admin/EditProduct';
import ProductDetail from './Components/Product/ProductDetail/ProductDetail';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Favorites from './Components/Favorites/FavoritesList';
import ShoppingCart from './Components/Cart/ShoppingCart';
import Checkout from './Components/PayForm/Checkout';
import Comments from './Components/Comments/Comments';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import MainPage from './Components/Home/MainPage';

const MyRoutes = () => {
    return (
        <ProductsContextProvider>
            <BrowserRouter>
                <Header/>
                {/* <BottomMenu/> */}
                <Routes>
                <Route path ='/add' element={<AddProduct />}/>
                <Route path='/products' element={<Products/>}/>
                <Route path ='/edit/:id' element={<EditProduct/>}/>
                <Route path='/detail/:id' element={<ProductDetail/>} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} /> 
                <Route path='/' element={<MainPage />} /> 
                <Route path='/favorites' element={<Favorites/>} />
                <Route path='/cart' element={<ShoppingCart/>} />
                <Route path='/payform' element={<Checkout/>}  />
                <Route path='/home'  element={<Home/>}  />
                <Route path='/comments'  element={<Comments/>}  />
                <Route path='/payform'  element={<Checkout/>}  />
                </Routes>
                <Footer />
            </BrowserRouter>
        </ProductsContextProvider>
    );
};

export default MyRoutes;