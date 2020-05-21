import React from 'react';
import { shallow } from 'enzyme';
import StrainInformation from '../components/StrainInformation';

describe('StrainInformation Component', () => {
	const component = shallow(<StrainInformation />);
	it('should display a details container', () => {
		expect(component.find('div').length).toEqual(1);
	});
});