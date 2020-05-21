import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../components/Modal';

describe('Modal Component', () => {
	const component = shallow(<Modal isShowing={true}/>);
	it('should return text prompt', () => {
		expect(component.find('button').text()).toEqual('confirm');
	});
});
