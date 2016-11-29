import React from 'react';
import { mount, shallow } from 'enzyme';

import { Scroller, ListItem } from 'components/horizontallist';

describe('<Scroller />', ()=>{
  let wrapper;

  beforeEach(()=>{
    wrapper = mount(<Scroller />);
  });

  it('has .listContainerScroll', ()=>{
    expect(wrapper.find('.listContainerScroll').length).toBe(1);
  });

  it('shows <ListItem />', ()=>{
    expect(wrapper.find(ListItem).length).toBeGreaterThan(1);
  });
});
