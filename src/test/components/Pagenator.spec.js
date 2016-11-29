import React from 'react';
import { mount } from 'enzyme';

import { Pagenator, ListItem } from 'components/horizontallist';

describe('<Pagenator />', ()=>{
  let wrapper;

  beforeEach(()=>{
    wrapper = mount(<Pagenator />);
  });

  it('shows <ListItem />', ()=>{
    expect(wrapper.find(ListItem).length).toBeGreaterThan(1);
  });
});
