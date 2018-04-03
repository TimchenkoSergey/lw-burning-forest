import { connect } from 'react-redux';

import { IState } from '../../models';
import { LWPage } from './component';

export interface IMapStateToProps {

}

export interface IMapDispatchToProps {

}

const mapStateToProps = (state: IState): IMapStateToProps => ({

});

const mapDispatchToProps = (dispatch): IMapDispatchToProps => ({

});

export const LWPageContainer = connect<IMapStateToProps, IMapDispatchToProps>(
    mapStateToProps,
    mapDispatchToProps,
)(LWPage);
