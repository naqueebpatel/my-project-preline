import { Router } from 'lucide-react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cards from './Cards';
import NavBar from './NavBar';
import HeroForms from './HeroForms';
import About from './About';
import Clients from './Clients';
import FAQ from './FAQ';
import Footer from './Footer';
import Offer from './Offer';
import Blogs from './Blogs';
import ErrorPage from './ErrorPage';
import ContactUs from './Contact';
import BlogArticle from './BlogPage';
import Help from './Help';
import Resources from './Resources';
import Carousal from './Carousal';

import Testimonials from './Testimonials';

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import FeaturedCourse from './FeaturedCourse';

const AllRoutes = () =>
{

    const location = useLocation();

    useEffect( () =>
    {
        window.HSStaticMethods.autoInit();
    }, [ location.pathname ] );

    return (
        <>

            <Routes>

                <Route path="/" element={
                    <>
                        <NavBar />
                        {/* <Offer /> */ }
                        <HeroForms />
                        {/* <Carousal /> */}
                        <FeaturedCourse/>
                        <About />
                        <Testimonials />
                        {/* <Cards /> */ }
                        <Clients />
                        <Help />
                        {/* <FAQ /> */ }
                        <Footer />
                    </>
                } />
                <Route path='*' element={ <ErrorPage /> } />

                <Route path='/blog' element={ <><NavBar /> <Blogs /> <Footer /></> } />
                <Route path='/contact' element={
                    <>
                        <NavBar />
                        <ContactUs />
                        <FAQ />
                        <Footer />
                    </> }
                />

                <Route path="/blogArticle" element={
                    <>
                        <NavBar />
                        <BlogArticle />
                        <Footer />
                    </>

                } />

                <Route path="/courses" element={
                    <>
                        <NavBar />
                        <Cards />
                        <Footer />
                    </>

                } />

                <Route path="/resource" element={
                    <>
                        <NavBar />
                        <Resources />
                        <Footer />
                    </>

                } />
            </Routes>
        </>
    );
};

export default AllRoutes;