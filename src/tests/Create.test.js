import React from 'react';
import { shallow } from 'enzyme';
import StrainForm from '../components/StrainForm';
import Create from '../components/Create';

describe('Create component', () => {
	const component = shallow(<Create />);
   
    it('should contain a child component called StrainForm', () => {
		expect(component.find(StrainForm).length).toBe(1);
	});
});
