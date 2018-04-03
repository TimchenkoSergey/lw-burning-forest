import { connect } from 'react-redux';

import { IState } from '../../models';
import { LoginPage } from './component';

export interface IMapStateToProps {

}

export interface IMapDispatchToProps {

}

const mapStateToProps = (state: IState): IMapStateToProps => ({

});

const mapDispatchToProps = (dispatch): IMapDispatchToProps => ({

});

export const LoginPageContainer = connect<IMapStateToProps, IMapDispatchToProps>(
    mapStateToProps,
    mapDispatchToProps,
)(LoginPage);
