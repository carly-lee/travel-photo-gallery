import React from 'react';
import { mount } from 'enzyme';

import { ListItem } from 'components/horizontallist';

describe('<ListItem />', ()=>{
  let wrapper;
  let props = { type: 'scroll', index:0, width: 200 };

  const setup = (props)=>{
    wrapper = mount(<ListItem {...props}/>);
  }

  it('has .listitem by default', ()=>{
    setup();
    expect(wrapper.is('.listitem')).toBe(true);
  });

  it('has .pageListItem by setting type as page', ()=>{
    props.type = 'page';
    setup();
    expect(wrapper.find('.pageListItem').not('.listitem').length).toEqual(1);
  });
});
