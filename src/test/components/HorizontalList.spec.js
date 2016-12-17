import React from 'react';
import { mount } from 'enzyme';

import { HorizontalList, ListItem, PageButton, BUTTON_DIRECTION } from 'components/horizontallist';
import londonJson from '../../data/london.json';

describe( '<HorizontalList />', ()=>{
	let wrapper;
	const onPhotoClick = jest.fn();
	let props = { id:'ld', title:'London', date: 'Dec, 2014 ~ Aug, 2016', photos: londonJson.photos, onPhotoClick };

	beforeEach(()=>{
		wrapper = mount( <HorizontalList {...props} /> );
	});

	it( 'allows us to set props', ()=>{
		expect( wrapper.instance().props.title ).toEqual( props.title );
		expect( wrapper.instance().props.date ).toEqual( props.date );
		expect( wrapper.instance().props.photos ).toEqual( props.photos );
	});

	it( 'previous button doesn\'t react when the currentPage is the first',()=>{
		wrapper.find( '.pageButtonLeft' ).simulate( 'click' );
		expect( wrapper.state().currentPage ).toBe( 0 );
	});

	it( 'currentPage is decreased when prev button is clicked',()=>{
		wrapper.setState({ currentPage: -1 });
		wrapper.find( '.pageButtonLeft' ).simulate( 'click' );
		expect( wrapper.state().currentPage ).toBe( 0 );
	});

	it( 'next button doesn\'t react when the currentPage is the last',()=>{
		wrapper.setState({ currentPage: -1*wrapper.state().maxPage });
		wrapper.find( '.pageButtonRight' ).simulate( 'click' );
		expect( wrapper.state().currentPage ).toBe( -1*wrapper.state().maxPage );
	});

	it( 'currentPage is increased when next button is clicked',()=>{
		wrapper.find( '.pageButtonRight' ).simulate( 'click' );
		expect( wrapper.state().currentPage ).toBe( -1 );
	});

});
