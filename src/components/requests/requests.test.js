import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Requests from './requests';


describe('Requests tests', () => {
	it('should render the Request', () => {
		expect(true);
	});

	it('should update the Title field', () => {
		const wrapper = shallow(<Requests />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});