import React, {Component} from 'react';
import {connect} from 'react-redux';

import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import {Link} from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: false,
            errorMessage: null,
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields( async (err, values) => {
            if (!err) {
                const response = await fetch('http://localhost:5000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values)
                });
                const result = await response.json();
                console.log(result);

                if (result.error){
                    this.setState({error: true, errorMessage: result.message});
                } else {
                    this.props.history.push('/');
                }
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (

            <div className={'login_cont'}>

                <Card title="Авторизация" style={{ maxWidth: 350 }} className={'login_card'}>
                    <Form onSubmit={this.handleSubmit} className="login_form">

                        <Form.Item>
                            {getFieldDecorator('login', {
                                rules: [{ required: true, message: 'Необходимо указать Ваш логин' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Введите логин"
                                />,
                            )}
                        </Form.Item>

                        <Form.Item>
                            {getFieldDecorator('pass', {
                                rules: [{ required: true, message: 'Необходимо указать пароль' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Введите пароль"
                                />,
                            )}
                        </Form.Item>

                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>Запомнить</Checkbox>)}
                            <Link to={'/rememberPass'} className="login_form_forgot">Забыл пароль?</Link>
                            <Button type="primary" htmlType="submit" className="login_form_button">
                                Войти
                            </Button>
                            Или <Link to={'/registration'}>зарегистрируйтесь</Link>
                        </Form.Item>

                    </Form>
                </Card>

            </div>

        );
    }
}

const WrappedLogin = Form.create({ name: 'normal_login' })(Login);

export default connect()(WrappedLogin);
