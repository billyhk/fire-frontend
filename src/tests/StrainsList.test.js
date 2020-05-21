import React from 'react';
import { shallow } from 'enzyme';
import StrainsList from '../components/StrainsList';

describe('StrainsList Component', () => {
	const component = shallow(<StrainsList />);
	it('should display a gallery container for api results', () => {
		expect(component.find('div').length).toEqual(1);
	});
});
