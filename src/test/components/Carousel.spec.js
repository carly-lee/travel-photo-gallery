import React from 'react';
import { mount } from 'enzyme';

import { Carousel } from 'components/carousel';
import config from '../../data/config.json';

describe('<Carousel />', ()=>{
  let wrapper;
  let props = { list:config.carousel };

  const setup = ()=>{
    wrapper = mount( <Carousel {...props} /> );
  }

  it('renders Carousel', ()=>{
    setup();
    expect( wrapper.find('.carousel').length ).toEqual(1);
  });
});
