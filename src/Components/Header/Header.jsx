import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material';
import React from 'react';
import logo from '../../Assets/logo1.png'

const Header = () => {
    return (
        <header>
         <img src={logo} alt="logo" className='logo'/>
         <div className="inputBox">
             <SearchRounded className="searchIcon"/>
             <input type="text" placeholder="Search"></input>
             </div>  
            <div className='shoppingCart'>
                <ShoppingCartRounded className='cart'/>
                <div className='cart_content'>
                    <p>2</p>
                </div>
                </div> 
                <div className = "profileContainer">
                    <div className='imgBox'>
                        <img src="https://thumbs.dreamstime.com/b/icon-social-profile-over-orange-iconic-image-networks-anonymous-very-personal-character-148258708.jpg" alt=""/>
                    </div>
                  <h2 className='userName'>Sezim Ydyrysova</h2>
                </div>
                <div className='toggleMenu'>
                    <BarChart className="toggleIcon" />
                </div>
        </header>
    );
};

export default Header;