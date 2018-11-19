import { connect } from 'react-redux';

import Downloads from './downloads-section';

const mapStateToProps = state => {
	return {
		pdfRoute: state.pdfRoutes.imagesFolder
	};
};

const mapDispatchToProps = dispatch => {
	return dispatch;
};

export default connect(mapStateToProps, mapDispatchToProps)(Downloads);