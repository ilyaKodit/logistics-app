import React, {Component} from 'react';

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
            <div>

                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal"
                      className={'navbar_cont'}>

                    <Menu.Item key="home">
                        <Icon type="home"/>
                        Главная
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

                    <Menu.Item key="login">
                        <Icon type="user"/>
                        Войти
                    </Menu.Item>


                </Menu>

            </div>
        );
    }
}

export default Navbar;
