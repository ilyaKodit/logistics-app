import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Icon, Menu} from "antd";

const {SubMenu} = Menu;

class Navbar extends Component {

    state = {
        current: 'home',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div className={'navbar_cont'}>

                <div>
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal"
                          className={'navbar_left'}>
                        <Menu.Item key="home">
                            <Icon type="home"/>
                            <Link to={'/'} className={'navbar_link'}>Главная</Link>
                        </Menu.Item>
                        <SubMenu
                            title={
                                <span className="submenu-title-wrapper">
                                    <Icon type="bars"/>
                                    Инструменты
                                </span>
                            }
                        >
                            <Menu.ItemGroup title="Отправка грузов">
                                <Menu.Item key="findCarrier">Найти грузоперевочика</Menu.Item>
                                <Menu.Item key="trackShipment">Отследить отправку</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="Дополнительно">
                                <Menu.Item key="volumeCalc">Калькулятор объёма груза</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                    </Menu>
                </div>

                <div>
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal"
                          className={'navbar_right'}>
                        <Menu.Item key="login">
                            <Icon type="user"/>
                            <Link to={'/login'} className={'navbar_link'}>Войти</Link>
                        </Menu.Item>
                    </Menu>
                </div>

            </div>
        );
    }
}

export default connect()(Navbar);
