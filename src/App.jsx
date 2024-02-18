import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css'
import AllRoutes from './components/AllRoutes'

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   window.HSStaticMethods.autoInit();
  // }, [location.pathname]);

  return (
    <>
    {/* <NavBar/>
    <HeroForms/>
    <About/>
    <Cards/>
    <Clients/>
    <FAQ/>
    <Footer/> */}
    
    <AllRoutes/>
    </>
  )
}

export default App
