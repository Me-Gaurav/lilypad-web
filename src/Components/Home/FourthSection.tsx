import React from 'react'
import { Row, Col, Image, Typography, Carousel } from 'antd'
//@ts-ignore
import vector6 from "../../assets/images/Vector6.svg"
//@ts-ignore
import vector8 from "../../assets/images/Vector8.svg"
import "./homeStyle/fourthSection.css"

const { Text } = Typography

const FourthSection = () => {
    return (
        <Row className='fourth-section-container'>

            <Col xs={24} md={12} lg={13} className='fourth-left-container'>
                <Col span={24} className='fourth-left-sub-container'>
                    <Image src={vector6} width={130} preview={false} />
                    <Text className='fourth-title'>What People Are Saying</Text>
                </Col>
            </Col>

            <Col xs={24} md={12} lg={11} className='fourth-right-container'>
                <Carousel className='custom-caraousel' autoplay slidesToShow={1} dots={false} adaptiveHeight centerMode>
                    <Col xs={24} md={16} lg={14} className='fourth-card-container'>
                        <Col span={24} className='fourth-card-avatar-container'>
                            <Col span={6}>
                                <Image src={vector8} width={70} className='fourth-card-avatar' preview={false} />
                            </Col>
                            <Col span={18} className="fourth-card-name-container">
                                <Text className='fourth-card-name'>Pitter Park</Text>
                                <Text type='secondary'>Freelancer</Text>
                            </Col>
                        </Col>
                        <Col span={24} className='fourth-card-description-container'>
                            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</Text>
                        </Col>
                        <Col></Col>
                    </Col>
                    <Col xs={24} md={16} lg={14} className='fourth-card-container'>
                        <Col span={24} className='fourth-card-avatar-container'>
                            <Col span={6}>
                                <Image src={vector8} width={70} className='fourth-card-avatar' preview={false} />
                            </Col>
                            <Col span={18} className="fourth-card-name-container">
                                <Text className='fourth-card-name'>Pitter Park</Text>
                                <Text type='secondary'>Freelancer</Text>
                            </Col>
                        </Col>
                        <Col span={24} className='fourth-card-description-container'>
                            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</Text>
                        </Col>
                        <Col></Col>
                    </Col>
                </Carousel>
            </Col>
        </Row >
    )
}

export default FourthSection