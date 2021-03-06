import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Icon, Menu} from "antd";

const {SubMenu} = Menu;

class Navbar extends Component {

    render() {
        return (
            <div className={'navbar_cont'}>
                <Menu
                    defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['sub1']}
                    mode="horizontal"
                    theme="dark"
                >
                    <Menu.Item key="1">
                        <Icon type="home" />
                        <Link to={'/'} className={'navbar_link'}>Главная</Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="bars" />
                                <span>Инструменты</span>
                            </span>
                        }
                    >
                        <Menu.Item key="2">Найти грузоперевозчика</Menu.Item>
                        <Menu.Item key="3">Статус отправок</Menu.Item>
                        <SubMenu key="sub2" title="Дополнительно">
                            <Menu.Item key="4">Калькулятор объёма груза</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <Menu.Item key="5">
                        <Icon type="user" />
                        <Link to={'/login'} className={'navbar_link'}>Войти</Link>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default connect()(Navbar);
