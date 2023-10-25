import React from 'react'
import FirstSection from '../Components/Home/FirstSection'
import SecondSection from '../Components/Home/SecondSection'
import Navbar from '../Components/Layouts/Navbar'
import ThirdSection from '../Components/Home/ThirdSection'
import FourthSection from '../Components/Home/FourthSection'
import Footer from '../Components/Layouts/Footer'

const Home = () => {
  return (
    <>
            <Navbar />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <Footer/>
        </>
  )
}

export default Home