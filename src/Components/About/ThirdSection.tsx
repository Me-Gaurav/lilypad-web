import React from 'react'
import { Col, Row, Typography, Image } from 'antd'
//@ts-ignore
import vector11 from "../../assets/images/Vector11.svg"
import "./aboutStyle/thirdSection.css"

const { Text } = Typography

const ThirdSection = () => {
    return (
        <Row className='about-third-section-container'>
            <Col span={12} className='about-third-left-container'>
                <Image src={vector11} className='vector11' preview={false}/>
            </Col>
            <Col xs={24} md={12} lg={12} className='about-third-right-container'>
                <Text className='about-third-title'>Our mission</Text>
                <Text className='about-third-description'>Our goal is to expedite India's transition to a sustainable transportation ecosystem. We believe that electric vehicles are a crucial component of the solution, and we are working to make the transition to EVs as simple as possible. Lilypad's online marketplace and solar EV charging stations are contributing to a more sustainable world, and we are committed to continuing our efforts.</Text>
            </Col>
        </Row>
    )
}

export default ThirdSection