import * as React from 'react';

import { IMapStateToProps, IMapDispatchToProps } from './container';
import { LoginPageContainer } from '../login-page';
import { LWPageContainer } from '../lw-page';

interface IProps extends IMapStateToProps, IMapDispatchToProps {

}

export class Main extends React.Component<IProps, {}> {
    props: IProps;

    render() {
        const { isLoggedIn } = this.props;

        return (
            <div className="main">
                {
                    (isLoggedIn)
                        ? <LWPageContainer />
                        : <LoginPageContainer />
                }
            </div>
        );
    }
}
