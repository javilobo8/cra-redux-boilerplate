import {connect} from 'react-redux';

import {actions} from '../modules/landing';
import LandingView from '../components/LandingView';

const mapStateToProps = ({landing}) => ({
  count: landing.get('count'),
});

const mapDispatchToProps = {...actions};

export default connect(mapStateToProps, mapDispatchToProps)(LandingView);
