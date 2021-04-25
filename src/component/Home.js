import React from 'react';
import ServiceSection from "./ServicesSection";
import AboutUs from "./AboutUsSection";
import ContactUs from "./ContactUsSection";


function Home() {
    return(
        <>
            <ServiceSection />
            <AboutUs />
            <ContactUs />
        </>
    );
}


export default Home;