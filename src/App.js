import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import './App.css'
import './css/open-iconic-bootstrap.min.css'
import './css/animate.css'
import './css/owl.carousel.min.css'
import './css/owl.theme.default.min.css'
import './css/magnific-popup.css'
import './css/aos.css'
import './css/ionicons.min.css'
import './css/flaticon.css'
import './css/icomoon.css'
import './css/style.css'

/*import './js/jquery.min.js'

import './js/jquery-migrate-3.0.1.min.js'
import './js/popper.min.js'
import './js/bootstrap.min.js'
import './js/jquery.easing.1.3.js'
import './js/jquery.waypoints.min.js'
import './js/jquery.stellar.min.js'
import './js/owl.carousel.min.js'
import './js/jquery.magnific-popup.min.js'
import './js/aos.js'
import './js/jquery.animateNumber.min.js'
import './js/scrollax.min.js'
import './js/main.js'*/


    const script = document.createElement("script");

    script.src = "https://unpkg.com/ionicons@4.2.2/dist/ionicons.js";
    script.async = true;

    document.body.appendChild(script);


    
class App extends Component {
  render() {
    return (
         
         <div className="App">
          
           <Navbar/>
           <Carousel/>
           
          </div>
         
    )
  }
}

export default App;