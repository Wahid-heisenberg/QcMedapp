// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Why from "./pages/Why";
import Functionalities from "./pages/Functionalities";
import Demo from "./pages/Demo";
import Offers from "./pages/Offers";
import Footer from "./pages/Footer";
import Faq from "./pages/Faq";
import Slider from "./pages/Slider";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Why />
      <Functionalities/>
      <Demo/>
      <Offers/>
      <Faq/>
      <Slider/>
      <Footer/>
    </>
  );
}

export default App;
