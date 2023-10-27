import React from 'react'
import Navbar from '../Components/Layouts/Navbar'
import FirstSection from '../Components/Contact/FirstSection'
import SecondSection from '../Components/Contact/SecondSection'
import Footer from '../Components/Layouts/Footer'

const Contact = () => {
    return (
        <>
            <Navbar />
            <FirstSection />
            <SecondSection />
            <Footer/>
        </>
    )
}

export default Contact