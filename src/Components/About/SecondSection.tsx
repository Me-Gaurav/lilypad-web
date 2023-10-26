import React from 'react'
import { Row, Col, Typography, Image } from 'antd'

// @ts-ignore
import vector10 from "../../assets/images/Vector10.svg"
import "./aboutStyle/secondSection.css"

const { Text } = Typography

const SecondSection = () => {
    return (
        <Row className='about-second-section-container'>
            <Col xs={24} md={12} lg={12} className='about-second-left-container'>
                <Text className='about-second-title'>What we do</Text>
                <Text className='about-second-description'>Lilypad is an organization that actively promotes the use of eco-friendly modes of transportation and renewable power sources in India. We see electric vehicles as an important part of the solution and are striving to remove barriers to their widespread adoption. The online marketplace and solar EV charging stations provided by Lilypad are making a difference, and we are dedicated to continue working to make the world a more sustainable place.</Text>
            </Col>
            <Col xs={24} md={12} lg={12} className='about-second-right-container'>
                <Image src={vector10} width={400} preview={false} />
            </Col>
        </Row>
    )
}

export default SecondSection