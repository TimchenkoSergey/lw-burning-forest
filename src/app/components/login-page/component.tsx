import * as React from 'react';
import { Card } from 'antd';

import { IMapStateToProps, IMapDispatchToProps } from './container';
import { PASSWORD } from '../../constants';
import { WrappedLoginForm } from './form';

interface IProps extends IMapStateToProps, IMapDispatchToProps {

}

export class LoginPage extends React.Component<IProps, {}> {
    props: IProps;

    onSubmit = (values: any) => {
        console.log(values);
    };

    render() {
        return (
            <div className="login-page">
                <Card title="Введите свои данные">
                    <WrappedLoginForm />
                </Card>
            </div>
        );
    }
}
