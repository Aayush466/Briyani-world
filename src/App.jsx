import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from "./components/Hero/Hero";
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import AppStore from './components/AppStore/AppStore';

function App() {
  return (
   <>
     <Navbar/>
     <Hero/>
     <Services />
     <Banner/>
     <AppStore/>
     <Footer/>
   </>
  )
}

export default App