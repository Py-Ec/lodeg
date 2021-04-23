import React from 'react';
import ServiceSection from "./ServicesSection";
import AboutUs from "./AboutUsSection";
import ContactUs from "./ContactUsSection";
import Header from './Header';

function Home() {
    return(
        <>
            <Header />
            <ServiceSection />
            <AboutUs />
            <ContactUs />
        </>
    );
}


export default Home;