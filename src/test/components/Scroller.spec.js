import React from 'react';
import { mount, shallow } from 'enzyme';

import { Scroller, ListItem } from 'components/horizontallist';

describe('<Scroller />', ()=>{
  let wrapper;

  beforeEach(()=>{
    wrapper = mount(<Scroller />);
  });

  it('has .listContainerScroll', ()=>{
    expect(wrapper.is('.listContainerScroll')).toBe(true);
  });

  it('shows <ListItem />', ()=>{
    expect(wrapper.find(ListItem).length).toBeGreaterThan(1);
  });
});
