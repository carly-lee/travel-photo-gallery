import React from 'react';
import { mount } from 'enzyme';

import { PageButton } from 'components/horizontallist';
import { Icon, IconTypes } from 'components/icon';

describe('<PageButton />', ()=>{
  let wrapper;
  let onClick = jest.fn();
  let props = { direction: 1, onClick: onClick };

  const setup = ()=>{
    wrapper = mount( <PageButton {...props} /> );
  }

  it('renders the prev PageButton', ()=>{
    setup();
    expect( wrapper.find('.pageButtonLeft').length ).toEqual(1);
    expect( wrapper.contains(<Icon iconType={IconTypes.ARROW_LEFT} />) ).toBe(true);
  });

  it('calls onClick with the right parameter when button is clicked', ()=>{
    setup();
    wrapper.find('.pageButtonLeft').simulate('click');
    expect(onClick).toHaveBeenCalledWith( props.direction );
  });

  it('renders the next PageButton', ()=>{
    props.direction = -1;
    setup();
    expect( wrapper.find('.pageButtonRight').length ).toEqual(1);
    expect( wrapper.contains(<Icon iconType={IconTypes.ARROW_RIGHT} />) ).toBe(true);
  });
});
