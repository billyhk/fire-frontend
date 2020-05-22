import React from 'react';
import { shallow } from 'enzyme';
import StrainForm from '../components/StrainForm';

const strain = {
	_id: '5ec5041b45f19100047b3684',
	title: 'Hall of Fame',
	name: 'Amnesia Haze',
	genetics: 'Sativa dominant (70%)',
	plantCategory: 'Sativa',
	popular: true,
	parents: 'Jamaican, Afghani, Laos, Hawaiian',
	thcContent: '22 - 24%',
	cbdContent: 'Low',
	smellAndFlavor: 'Sweet, Pepper, Citrus, Spicy, Earthy',
	effect: 'Uplifting, Euphoric, Cerebral, Strong, Energetic',
	info:
		'Amnesia Haze has a classic, long, maturing psychotropic sativa lineage tamed with a dash of dense mountain indica. Two land-races and a hybrid have been expertly combined to produce a THC powerhouse that has an effect that even the most experienced cannabis aficionados will find undeniable and insistent. Amnesia Haze has dense flower clusters that are hard to the touch when cured lovingly. So well-crystallised are the firm nuggets, that they seem to have been lightly glazed with some kind of exotic cardamom and lime, marjoram and mandarin flavoured toffee that sparkles and refracts the light. The overdrive trichome production makes Amnesia Haze prized for hashes and other extractions. Warmed and twenty tonne pressed, the clear honey-coloured 22% THC resin waterfalls are a sticky sight to behold and an incomparable aromatic revelation.',
	img: 'imgurl',
	__v: 0,
};

describe('StrainForm Component', () => {
	const component = shallow(<StrainForm strain={strain} />);
	it('should return an input field', () => {
		expect(component.find('input').length).toBe(9);
	});
});
