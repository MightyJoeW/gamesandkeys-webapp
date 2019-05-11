import { connect } from 'react-redux';

import Downloads from './downloads-section';

const mapStateToProps = state => {
	return {
		pdfRoute: state.pdfRoutes.imagesFolder
	};
};

export default connect(mapStateToProps, null)(Downloads);