import React from 'react';
import ServiceSection from "./ServicesSection";
import ChatRoom from "./ChatRoomSection";
import AboutUs from "./AboutUsSection";
import ContactUs from "./ContactUsSection";
import Header from './Header';

function Home() {
    return(
        <>
            <Header />
            <ServiceSection />
            <ChatRoom />
            <AboutUs />
            <ContactUs />
        </>
    );
}


export default Home;