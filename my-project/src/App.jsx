import React from 'react'
import  Navbar from "./Components/Navbar";
import Route from './Components/Route';
import Content from './Components/Content';
import Content_footer from './Components/Content_footer';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
    <Navbar/>
    <div className='w-[83%] m-auto mt-[50px]  ' >
      <Route/>
      <Content/>
    </div>
    <div className='w-[90%] m-auto mt-[50px] h-[100vh]' >
    <Content_footer/>
    <Footer/>
    
    </div>
    </>
  )
}

export default App