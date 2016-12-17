import React from 'react';
import { mount } from 'enzyme';

import { ListItem } from 'components/horizontallist';

describe( '<ListItem />', ()=>{
	let wrapper;
	let onClick = jest.fn();
	let props = { index:1, width: 200, posX:205, data:{ 'src':'/images/LD/LD_0.jpg', 'thumbnail':'/images/LD/thumbnail/LD_0.jpg', 'location':' ' }, onClick:onClick };

	beforeEach(()=>{
		wrapper = mount( <ListItem {...props} /> );
	});

	it( 'allows us to set props', ()=>{
		expect( wrapper.props().index ).toBe( props.index );
		expect( wrapper.props().data ).toBe( props.data );
		expect( wrapper.props().width ).toBe( props.width );
		expect( wrapper.props().posX ).toBe( props.posX );
	});

	it( 'calls onClick with the right parameter when component is clicked', ()=>{
		wrapper.find( '.listItem' ).simulate( 'click' );
		expect( onClick ).toHaveBeenCalledWith( props.index );
	});
});
