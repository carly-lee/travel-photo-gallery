import React from 'react';
import { mount } from 'enzyme';

import { Carousel } from 'components/carousel';

describe('<Carousel />', ()=>{
  let wrapper;
  let props = {};

  const setup = ()=>{
    wrapper = mount( <Carousel {...props} /> );
  }

  it('renders Carousel', ()=>{
    setup();
    expect( wrapper.find('.carousel').length ).toEqual(1);
  });
});
