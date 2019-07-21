import React from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import { Menu, Dropdown, Icon } from 'antd';
import sample from './sample.mp4';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.png';



const menu = (
    <Menu style={{float:'right', margin:'10px', borderWidth:"1px", borderStyle:"solid", background:"#ffffff"}}>
      <Menu.Item key="0" style={{listStyleType:"none"}}>
        <i class="fab fa-facebook"></i>
        <button className="loginBtn">Facebook Login</button>
      </Menu.Item>
      <Menu.Item key="1" style={{listStyleType:"none"}}>
        <i class="fab fa-google"></i>
        <button className="loginBtn">Google Login</button>
      </Menu.Item>
    </Menu>
  );
  
  function landingPage(){
    return (
      <div>
        <nav className="navbar">
          <div><img src={logo} alt="AppLogo" className="AppLogo"/></div>
        <div className="landingNav">
          <Link to="/chooseTemp" style={{textDecoration:'none'}}><button className="landingBtn">Resume Templates</button></Link>
          {/* <button className="landingBtn" disabled>Portfolio</button>
          <Dropdown overlay={menu} trigger={['click']}>
          <button className="landingBtn ant-dropdown-link" disabled>LOGIN</button> 
          </Dropdown> */}
        </div>
        </nav>

        {/* <div className="Separator"></div> */}

        <div className="carousel">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-90" src={require('./first.jpg')} alt="First slide"/>
            </Carousel.Item>
    
            <Carousel.Item>
              <img className="d-block w-90" src={require('./second.jpg')} alt="Third slide"/>
            </Carousel.Item>
    
            <Carousel.Item>
              <img className="d-block w-90" src={require('./third.jpg')} alt="Third slide"/>
            </Carousel.Item>
          </Carousel>
        </div> 

        <div className="videoPlayer"> 
          <video className='videoTag' autoPlay loop muted>
          <source src={sample} type='video/mp4' />
          </video>    
        </div>
      </div>
    )
  }
  

  export default landingPage;