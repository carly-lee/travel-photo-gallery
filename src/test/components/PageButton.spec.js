import React from 'react';
import { mount } from 'enzyme';

import { PageButton } from 'components/horizontallist';

describe('<PageButton />', ()=>{
  let wrapper;
  let props = { direction: 1, onClick: ()=>{} };

  const setup = ()=>{
    wrapper = mount( <PageButton {...props} /> );
  }

  it('renders the prev PageButton', ()=>{
    setup();
    expect( wrapper.find('.pageButtonLeft').length ).toEqual(1);
  });
});
