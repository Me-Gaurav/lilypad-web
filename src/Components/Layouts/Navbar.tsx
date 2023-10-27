import React, { useState } from 'react'
import { Menu, MenuProps, Image, Typography, Col, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
//@ts-ignore
import logo from "../../assets/images/darkLogo.svg"
//@ts-ignore
import bag from "../../assets/images/bag.svg"
//@ts-ignore
import user from "../../assets/images/user.svg"
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
    const [collapsed, setCollapsed] = useState(false);

    const navigate = useNavigate();

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const onClick: MenuProps['onClick'] = (e) => {
        if (e.key === "aboutUs") {
            navigate("/about")
        } else if (e.key === "contactUs") {
            navigate("/contact")
        } else if (e.key === "home") {
            navigate("/")
        }
    };

    return (
        <Row>
            <Col xs={0} md={5} className='nav-logo-container'>
                <Image src={logo} className='nav-logo'/>
            </Col>
            <Col xs={24} lg={19}>
                <Menu
                    className='navbar-menu'
                    theme="dark"
                    onClick={onClick}
                    mode={collapsed ? 'vertical' : 'horizontal'}
                    defaultSelectedKeys={['1']}
                    inlineCollapsed={collapsed}
                    items={items}
                />
            </Col>
        </Row>
    )
}

export default Navbar