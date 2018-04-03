import * as React from 'react';
import {
    Form,
    Icon,
    Input,
    Button,
} from 'antd';

const UserIcon = <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />;
const PasswordIcon = <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />;
const TeamIcon = <Icon type="team" style={{ color: 'rgba(0,0,0,.25)' }} />;

export class Login extends React.Component<any, {}> {
    private fields = {
        name: {
            rules: [
                { required: true, message: 'Введите своё имя!' },
            ],
        },
        lastName: {
            rules: [
                { required: true, message: 'Введите свою фамилию!' },
            ],
        },
        group: {
            rules: [
                { required: true, message: 'Введите свою группу!' },
            ],
        },
        password: {
            rules: [
                { required: true, message: 'Введите пароль!' },
                /*{ pattern: PASSWORD, message: 'Введите правильный пароль!' },*/
            ],
        },
    };

    onSubmit = (e) => {
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
            <Form onSubmit={ this.onSubmit } className="login-page__form">
                <Form.Item>
                    {
                        getFieldDecorator('name', this.fields.name)
                        (<Input prefix={ UserIcon } placeholder="Имя" />)
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('lastName', this.fields.lastName)
                        (<Input prefix={ UserIcon } placeholder="Фамилия" />)
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('group', this.fields.group)
                        (<Input prefix={ TeamIcon } placeholder="Группа" />)
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('password', this.fields.password)
                        (
                            <Input
                                prefix={ PasswordIcon }
                                type="password"
                                placeholder="Пароль"
                            />
                        )
                    }
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-page__submit"
                    >
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export const WrappedLoginForm = Form.create()(Login);
