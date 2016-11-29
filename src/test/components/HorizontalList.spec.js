import React from 'react';
import { mount, shallow } from 'enzyme';

import { HorizontalList, Pagenator, Scroller } from 'components/horizontallist';

describe('<HorizontalList />', ()=>{
  let wrapper;
  let props = { title:'London', type: 'scroll' };

  const setup = ()=>{
    wrapper = mount( <HorizontalList {...props} />);
  };

  it('shows the title which passed by a prop', ()=>{
    setup();
    expect(wrapper.instance().props.title).toEqual('London');
    expect(wrapper.find('.title').length).toEqual(1);
  });

  it('shows default type as scroll with <Scroller />', ()=>{
    setup();
    expect(wrapper.props().type).toEqual('scroll');
    expect(wrapper.find(Scroller).length).toEqual(1);
  });

  it('type can be set as page with <Pagenator />', ()=>{
    props.type = 'page';
    setup();
    expect(wrapper.instance().props.type).toEqual('page');
    expect(wrapper.find(Pagenator).length).toEqual(1);
  });
});
