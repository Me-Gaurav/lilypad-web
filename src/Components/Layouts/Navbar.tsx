import React, { useState } from 'react'
import { Menu, MenuProps, Image } from 'antd'
//@ts-ignore
import bag from "../../assets/images/bag.svg"
//@ts-ignore
import user from "../../assets/images/user.svg"
import "./layoutStyle/navbar.css"
import { useNavigate } from 'react-router-dom'

const items: MenuProps['items'] = [
    {
        label: 'Home',
        key: 'home',
    },
    {
        label: 'About Us',
        key: 'aboutUs',
    },
    {
        label: 'Contact Us',
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
        }
    };

    return (
        <Menu
            className='navbar-menu'
            theme="dark"
            onClick={onClick}
            mode={collapsed ? 'vertical' : 'horizontal'}
            defaultSelectedKeys={['1']}
            inlineCollapsed={collapsed}
            items={items}
        />
    )
}

export default Navbar