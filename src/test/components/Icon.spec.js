import React from 'react';
import { mount } from 'enzyme';

import { Icon, IconTypes } from 'components/icon';

describe( '<Icon />', ()=>{
	let wrapper;
	let props = { iconType: IconTypes.ARROW_LEFT };

	const setup = ()=>{
		wrapper = mount( <Icon { ...props } /> );
	};

	it( 'shows the left arrow icon', ()=>{
		setup();
		expect( wrapper.find( '.'+IconTypes.ARROW_LEFT ).length ).toEqual( 1 );
	});
});
