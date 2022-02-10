import React from 'react';
import './Home.css'
import IMG from '../../Assets/kurochka.jpeg'
import IMG1 from '../../Assets/kurochka2.png'
import { useNavigate } from 'react-router-dom';
import ProductList from '../Product/ProductList/ProductList';

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="body">
                <div className="intro">
                <div className="container">
                    <div className="intro__inner">

                        <div className="intro__left">
                            <h1 className="intro__title">Joy is Best Shared!</h1>
                            <p className="intro__text">Deliver food easy and fast</p>
                            <button className="buttons"   onClick={() => navigate('/login')}>Login</button>
                           
                        </div>

                        
                        <img src={IMG1} alt="" class="intro__img" />

                    </div>
                    
                </div>
            </div>
            
               
                <div className="about">
                    <div className="container">
                        <div className="about__inner">

                            <div className="about__left">
                                <h2 className="about__title">Jollibee is your local family restaurant</h2>
                                <p className="about__text">Welcome to Jollibee - one of the most family friendly and jolliest places on earth. Our menu offers many of your favorite comfort foods including fried chicken, French fries, pies, spaghetti, burgers, and more but with a Filipino twist. What’s the twist? Lots of Joy with some Filipino sweetness. We believe that joyful food makes joyful people. It also helped us to grow to be the biggest fast food chains in the Philippines. Try our world famous Chickenjoy fried chicken or our Chickenwich sandwich and you’ll understand why they bring so many people joy. So bring your family and your friends - There is nothing like eating food with joyfulness with the ones you love.</p>
                            </div>

                            <div className="about__right">
                                <img src={IMG} alt=""/>
                            </div>

                        </div>
                    </div>
                    </div>
                    <ProductList/>
                    <div className="sub">
                    <div className="container">
                        <div  className="sub__inner">

                            <div className="sub__left">
                                <span className="sub__title">Subscribe to our newsletter</span>
                                <p className="sub__text">The latest buzz and promotional offers delivered straight to your inbox.
                                </p>
                            </div>

                            <div className="sub__right">
                                <p className="sub__right-title">YOUR EMAIL</p>
                                <div className="sub__input">
                                    <input type="text"/>
                                    <button className="buttons">SUBSCRIBE</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        
        </div>
    );
};

export default Home;