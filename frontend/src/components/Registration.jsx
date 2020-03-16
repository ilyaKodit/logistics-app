import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import {
    Form,
    Input,
    Tooltip,
    Icon,
    Row,
    Col,
    Checkbox,
    Button,
    Card,
} from 'antd';

class Registration extends Component {

    constructor(props) {
        super(props);

        this.state = {
            confirmDirty: false,
            acceptedAgreement: true
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    handleCheckbox = e => {
        const { checked } = e.target;
        this.setState({ acceptedAgreement: !checked })
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    render() {

        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <div className={'reg_cont'}>

                <Card title="Регистрация" style={{ width: 480 }}>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>

                        <Form.Item label="Логин">
                            {getFieldDecorator('login', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Необходимо указать Ваш логин'
                                    }
                                ],
                            })(<Input />)}
                        </Form.Item>

                        <Form.Item
                            label={
                                <span>
                                    Почта&nbsp;
                                    <Tooltip title="Пожалуйста, введите в это поле Вашу почту">
                                        <Icon type="question-circle-o" />
                                    </Tooltip>
                                </span>
                            }
                        >
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: 'Введите валидную почту',
                                    },
                                    {
                                        required: true,
                                        message: 'Пожалуйста, введите Вашу почту',
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>

                        <Form.Item label="Пароль" hasFeedback>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Пожалуйста, введите Ваш пароль',
                                    },
                                    {
                                        validator: this.validateToNextPassword,
                                    },
                                ],
                            })(<Input.Password />)}
                        </Form.Item>

                        <Form.Item label="Повторите пароль" hasFeedback>
                            {getFieldDecorator('confirm', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Пожалуйста, повторите Ваш пароль',
                                    },
                                    {
                                        validator: this.compareToFirstPassword,
                                    },
                                ],
                            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                        </Form.Item>

                        <Form.Item label="Капча" extra="Нам необходимо убедиться, что вы человек">
                            <Row gutter={8}>
                                <Col span={12}>
                                    {getFieldDecorator('captcha', {
                                        rules: [{ required: true, message: 'Пожалуйста, введите капчу' }],
                                    })(<Input />)}
                                </Col>
                                <Col span={12}>
                                    <Button>Получить капчу</Button>
                                </Col>
                            </Row>
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            {getFieldDecorator('agreement', {
                                valuePropName: 'checked',
                            })(
                                <Checkbox onClick={this.handleCheckbox} className={'reg_checkbox'}>
                                    Я прочитал(а) <Link to={'/agreement'}>соглашение</Link>, и принимаю его условия.
                                </Checkbox>,
                            )}
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" disabled={this.state.acceptedAgreement}>
                                Зарегистрироваться
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}

const WrappedRegistration = Form.create({ name: 'register' })(Registration);

export default connect()(WrappedRegistration);
