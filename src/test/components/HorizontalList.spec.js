import React from 'react';
import { mount } from 'enzyme';

import { HorizontalList } from 'components/horizontallist';

describe('<HorizontalList />', ()=>{
  let wrapper;
  let props = { title:'London' };

  const setup = ()=>{
    wrapper = mount( <HorizontalList {...props} />);
  };

  it('shows the title which passed by a prop', ()=>{
    setup();
    expect(wrapper.instance().props.title).toEqual('London');
    expect(wrapper.find('.title').length).toEqual(1);
  });
});
