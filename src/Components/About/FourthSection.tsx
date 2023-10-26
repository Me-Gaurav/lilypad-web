import React from 'react'
import { Col, Row, Typography, Image } from 'antd'

//@ts-ignore
import vector12 from "../../assets/images/Vector12.svg"
import "./aboutStyle/fourthSection.css"

const { Text } = Typography

const FourthSection = () => {
    return (
        <Row className='about-fourth-section-container'>
            <Col span={24} className='about-top-container'>
                <Text className='about-fourth-title'>Our Story</Text>
                <Text className='about-fourth-description'>In January, we embarked on a journey, researching every aspect of the EV and renewable industry to provide better and easier solutions to people. With unwavering determination, we envisioned a future where renewable energy drives sustainable progress, revolutionizing clean mobility and harnessing renewable resources.</Text>
            </Col>
            <Col span={24} className='about-bottom-container'>
                <Image src={vector12} preview={false} className='vector12' />
            </Col>
        </Row>
    )
}

export default FourthSection