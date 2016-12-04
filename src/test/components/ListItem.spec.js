import React from 'react';
import { mount } from 'enzyme';

import { ListItem } from 'components/horizontallist';

describe('<ListItem />', ()=>{
  let wrapper;
  let props = { index:0, width: 200, data:{"src":"/images/LD/LD_0.jpg", "thumbnail":"/images/LD/thumbnail/LD_0.jpg", "location":" "}, onClick: ()=>{} };

  beforeEach(()=>{
    wrapper = mount(<ListItem {...props} />);
  });

  it('has .listItem by default', ()=>{
    expect(wrapper.find('.listItem').length).toBe(1);
  });
});
