import { connect } from 'react-redux';

import { IState } from '../../models';
import { Main } from './component';

export interface IMapStateToProps {
    isLoggedIn: boolean;
}

export interface IMapDispatchToProps {

}

const mapStateToProps = (state: IState): IMapStateToProps => ({
    isLoggedIn: state.isLoggedIn,
});

const mapDispatchToProps = (dispatch): IMapDispatchToProps => ({

});

export const MainContainer = connect<IMapStateToProps, IMapDispatchToProps>(
    mapStateToProps,
    mapDispatchToProps,
)(Main);
