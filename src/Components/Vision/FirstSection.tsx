import React from 'react'
import { Row, Col, Image, Typography } from 'antd'

//@ts-ignore
import vector13 from "../../assets/images/Vector13.svg"
import "./visionStyle/firstSection.css"

const { Text } = Typography

const FirstSection = () => {
    return (
        <Row className='vision-first-section-container'>
            <Col span={24} className='vision-first-sub-container'>
                <Col span={24} className='vision-top-container'>
                    <Text className='vision-first-title'>Our Vision</Text>
                    <Text className='vision-first-description'>"We need to be able to move away from fossil fuels and toward sustainable energy." </Text>
                    <Text className='vision-first-text'>~Elon Musk</Text>
                </Col>
                <Col span={24} className='vision-bottom-container'>
                    <Image src={vector13} preview={false} width={700} />
                </Col>
            </Col>
        </Row>
    )
}

export default FirstSection