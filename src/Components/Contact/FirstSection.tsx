import React from 'react'
import { Row, Col, Typography } from 'antd'

import "./contactStyle/firstSection.css"

const { Text } = Typography

const FirstSection = () => {
    return (
        <Row className='contact-first-section-container'>
            <Col span={12} className='contact-first-left-container'>
                <Col span={24} className='contact-first-left-top-container'>
                    <Text className='contact-first-sub-title'>CONTACT US</Text>
                    <Text className='contact-first-title'>We would love to hear from you.</Text>
                    <Text className='contact-first-description'>Fill up the form and our Team will get back to you within 24 hours.</Text>
                </Col>
                <Col span={24} className='contact-first-left-bottom-container'>
                </Col>
            </Col>
            <Col span={12}>

            </Col>
        </Row>
    )
}

export default FirstSection