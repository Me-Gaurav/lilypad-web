import React from 'react'
import { Row, Col, Image, Typography, Button } from "antd"
//@ts-ignore
import vector1 from "../../assets/images/Vector1.svg"
//@ts-ignore
import vector2 from "../../assets/images/Vector2.svg"
import "./homeStyle/firstSection.css"

const { Text } = Typography

const FirstSection = () => {
    return (
        <Row className='first-main-container'>

            <Col xs={24} md={14} lg={12} className='first-left-container'>
                <Col className='first-left-sub-container'>
                    <Text className='first-title'>Accelarating India's sustainable energy future</Text>
                    <Text className='first-description'>Lilypad has a cool range of EVs that includes electric scooters (low-speed, foldable or self-balancing), cycles, unicycles, hoverboards and accessories - all tailored to your needs. Start your journey towards a cleaner, brighter future. </Text>
                    <Button className='first-explore-btn'>Explore Our Range</Button>
                </Col>
            </Col>

            <Col xs={24} md={10} lg={12} className='first-right-container'>
                <Image src={vector1} className="vector1" preview={false}/>
                <Image src={vector2} className='vector2' preview={false}/>
            </Col>

        </Row>
    )
}

export default FirstSection