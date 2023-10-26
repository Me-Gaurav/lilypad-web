import React from 'react'
import { Row, Col, Typography, Input, Button, Space } from 'antd'

import "./contactStyle/secondSection.css"

const { Text } = Typography

const SecondSection = () => {
    return (
        <Row className='contact-second-section-container'>
            <Col span={16} className='contact-second-sub-container'>
                <Text className='contact-second-title'>Subscribe Newsletter & Get</Text>
                <Text className='contact-second-description'>Company News</Text>
                <Space>
                    <Input className='contact-subscribe-input' placeholder='Your email' />
                    <Button className='contact-subscribe-btn'>Subscribe</Button>
                </Space>
            </Col>
        </Row>
    )
}

export default SecondSection