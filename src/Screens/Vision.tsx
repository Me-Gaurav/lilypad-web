import React from 'react'
import { Row, Col } from 'antd'

import Navbar from '../Components/Layouts/Navbar'
import FirstSection from '../Components/Vision/FirstSection'
import SecondSection from '../Components/Vision/SecondSection'
import ThirdSection from '../Components/Vision/ThirdSection'
import FourthSection from '../Components/Vision/FourthSection'
import FifthSection from '../Components/Vision/FifthSection'
import Footer from '../Components/Layouts/Footer'

const Vision = () => {
    return (
        <>
            <Navbar />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <Footer />
        </>
    )
}

export default Vision