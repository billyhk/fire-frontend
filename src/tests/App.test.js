import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Modal from '../components/Modal';
import App from '../App';

configure({ adapter: new Adapter() });

describe('App Component', () => {
	let component = shallow(<App />);
	
	it('Should contain a Modal child component', () => {
		expect(component.find(Modal).length).toBe(1);
	});
});
