import React from 'react';
import ServiceSection from "./ServicesSection";
import AboutUs from "./AboutUsSection";
import ContactUs from "./ContactUsSection";
import ChatRoom from './ChatRoomSection';


function Home() {
    return(
        <>
            <ServiceSection />
            <ChatRoom />
            <AboutUs />
            <ContactUs />
        </>
    );
}


export default Home;