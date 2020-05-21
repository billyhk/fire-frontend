import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home';

describe('Home Component', () => {
	const component = shallow(<Home />);
	it('should have have a header', () => {
		expect(component.find('h1').contains('f i r e')).toBe(true);
	});
});