import React from 'react';
import Navbar from './components/pages/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Footer from './components/pages/Footer/Footer';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/Sign-up/SignUp';

const App = () => {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/services"  element={<Services />}/>
        <Route path="/products"  element={<Products />}/>
        <Route path="/sign-up"  element={<SignUp />}/>
      </Routes>
      <Footer />
      
    </Router>
  )

}

export default App;
