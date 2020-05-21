import React from 'react';
import { shallow } from 'enzyme';
import StrainForm from '../components/StrainForm';
import Edit from '../components/Edit';

describe('Edit component', () => {
	const component = shallow(<Edit />);

	it('should contain a child component called StrainForm', () => {
		expect(component.find(StrainForm).length).toBe(1);
	});
});
