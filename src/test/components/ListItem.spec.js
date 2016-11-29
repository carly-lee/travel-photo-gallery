import React from 'react';
import { mount, shallow } from 'enzyme';

import { ListItem } from 'components/horizontallist';

describe('<ListItem />', ()=>{
  let wrapper;
  let fixture = { type: 'scroll', index:0, width: 200 };

  const setup = (props)=>{
    wrapper = mount(<ListItem {...props} />);
  }

  it('has .listitem by default', ()=>{
    setup(fixture);
    expect(wrapper.find('.listitem').length).toBe(1);
  });

  it('has .pageListItem by setting type as page', ()=>{
    fixture.type = 'page';
    setup(fixture);
    expect(wrapper.find('.pageListItem').length).toEqual(1);
  });
});
