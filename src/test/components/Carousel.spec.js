import React from 'react';
import { mount } from 'enzyme';

import { Carousel, CarouselItem } from 'components/carousel';
import config from '../../data/config.json';

describe('<Carousel />', ()=>{
	let wrapper;
	let props = { list:config.carousel };

	beforeEach(()=>{
		wrapper = mount( <Carousel {...props} /> );
	});

	it.skip('renders Carousel', ()=>{
		expect( wrapper.find('.carousel').length ).toEqual(1);
		expect( wrapper.find('.title').length ).toEqual(1);
		expect( wrapper.find(CarouselItem).length).toEqual( props.list.length );
	});
});
