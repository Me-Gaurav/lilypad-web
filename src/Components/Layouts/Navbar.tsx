import React, { useEffect, useState } from 'react'
import { Menu, MenuProps, Image, Typography, Col, Row, Button, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
//@ts-ignore
import logo from "../../assets/images/darkLogo.svg"
//@ts-ignore
import bag from "../../assets/images/bag.svg"
//@ts-ignore
import user from "../../assets/images/user.svg"
//@ts-ignore
import burgerIcon from "../../assets/images/burgerIcon.svg"
import "./layoutStyle/navbar.css"

const { Text } = Typography

const items: MenuProps['items'] = [
    {
        label: <Text className='nav-item'>Home</Text>,
        key: 'home',
    },
    {
        label: <Text className='nav-item'>About Us</Text>,
        key: 'aboutUs',
    },
    {
        label: <Text className='nav-item'>Contact Us</Text>,
        key: 'contactUs',
    },
    {
        label: <Image src={bag} width={20} preview={false} />,
        key: 'addToBag',
    },
    {
        label: <Image src={user} width={20} preview={false} />,
        key: 'profile',
    },
]

const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState<any>(window.innerWidth);
    const [showMenu, setShowMenu] = useState<any>(false)

    const navigate = useNavigate();

    useEffect(() => {
        // Event handler to update windowWidth state
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        const handleReload = () => {
            setWindowWidth(window.innerWidth);
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);
        window.addEventListener('reload', handleReload);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('reload', handleReload);
        };
    }, [windowWidth]);

    console.log(windowWidth)

    const onClick: MenuProps['onClick'] = (e) => {
        if (e.key === "aboutUs") {
            navigate("/about")
        } else if (e.key === "contactUs") {
            navigate("/contact")
        } else if (e.key === "home") {
            navigate("/")
        }
    };

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <>
            {
                windowWidth > 500 ? (
                    <Row>
                        <Col xs={0} md={5} className='nav-logo-container'>
                            <Image src={logo} className='nav-logo' />
                        </Col>
                        <Col xs={24} md={19} lg={19}>
                            <Menu
                                className='navbar-menu'
                                theme="dark"
                                onClick={onClick}
                                mode='horizontal'
                                defaultSelectedKeys={['1']}
                                items={items}
                            />
                        </Col>
                    </Row>
                ) : (
                    <>
                        <Row>
                            <Col span={5} className='nav-logo-container'>
                                <Image src={logo} className='nav-logo' />
                            </Col>
                            <Col span={18}>
                                <Row justify="end" align="middle" className='mobile-navbar' gutter={30}>
                                    <Col>
                                        <Image src={bag} width={20} preview={false} />
                                    </Col>
                                    <Col>
                                        <Image src={user} width={20} preview={false} />
                                    </Col>
                                    <Col onClick={handleShowMenu}>
                                        <Image src={burgerIcon} preview={false} />
                                    </Col>
                                </Row>
                            </Col>
                            {
                                showMenu && (
                                    <Space direction='vertical' className='space-container'>
                                        <Col className='space-item' onClick={() => navigate("/")}>
                                            <Text className='space-text'>Home</Text>
                                        </Col>
                                        <Col className='space-item' onClick={() => navigate("/about")}>
                                            <Text className='space-text'>About</Text>
                                        </Col>
                                        <Col className='space-item' onClick={() => navigate("/contact")}>
                                            <Text className='space-text'>Contact</Text>
                                        </Col>
                                    </Space>
                                )
                            }
                        </Row>
                    </>
                )
            }
        </>
    )
}

export default Navbar