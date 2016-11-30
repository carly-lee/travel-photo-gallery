import React from 'react';
import { mount } from 'enzyme';

import { ListItem } from 'components/horizontallist';

describe('<ListItem />', ()=>{
  let wrapper;
  let props = { index:0, width: 200 };

  beforeEach(()=>{
    wrapper = mount(<ListItem {...props} />);
  });

  it('has .listitem by default', ()=>{
    expect(wrapper.find('.listitem').length).toBe(1);
  });
});
