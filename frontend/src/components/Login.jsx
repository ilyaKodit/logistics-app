import React, {Component} from 'react';
import {connect} from 'react-redux';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (

            <div className={'login_cont'}>
                <Form onSubmit={this.handleSubmit} className="login_form">
                    <Form.Item>
                        {getFieldDecorator('login', {
                            rules: [{ required: true, message: 'Необходимо указать логин' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Логин"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Необходимо указать пароль' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Пароль"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Запомнить</Checkbox>)}
                        <a className="login_form_forgot" href="">
                            Забыл пароль?
                        </a>
                        <Button type="primary" htmlType="submit" className="login_form_button">
                            Войти
                        </Button>
                        Или <a href="">зарегистрируйтесь</a>
                    </Form.Item>
                </Form>
            </div>

        );
    }
}

const WrappedLogin = Form.create({ name: 'normal_login' })(Login);

export default connect()(WrappedLogin);
