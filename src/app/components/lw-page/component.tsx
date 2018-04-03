import * as React from 'react';

import { IMapStateToProps, IMapDispatchToProps } from './container';

interface IProps extends IMapStateToProps, IMapDispatchToProps {

}

export class LWPage extends React.Component<IProps, {}> {
    props: IProps;

    render() {
        return (
            <div className="lw-page">
                lw page
            </div>
        );
    }
}
