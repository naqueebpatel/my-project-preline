import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import AllRoutes from './components/AllRoutes';
import { toast } from 'react-toastify';
import { HSAccordion } from 'preline';
function App ()
{
  const location = useLocation();

  useEffect( () =>
  {
    HSAccordion.autoInit();
  }, [ location.pathname ] );


  return (
    <>
      {/* <NavBar/>
    <HeroForms/>
    <About/>
    <Cards/>
    <Clients/>
    <FAQ/>
    <Footer/> */}

      <AllRoutes />
    </>
  );
}

export default App;
