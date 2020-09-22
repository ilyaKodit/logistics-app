import React, {Component} from 'react';
import {connect} from 'react-redux';
import ym from 'react-yandex-metrika';

import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import {Link} from "react-router-dom";

class Login extends Component {

  handleSubmit = e => {
    e.preventDefault();

    // ym(67444087,'reachGoal','login-btn')

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
              {getFieldDecorator('password', {
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
              <Button type="primary" htmlType="submit" id="login-btn" className="login_form_button" onClick="ym(67444087,'reachGoal','login-btn')">
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
