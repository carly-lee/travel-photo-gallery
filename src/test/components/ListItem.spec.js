import React from 'react';
import { mount, shallow } from 'enzyme';

import { ListItem } from 'components/horizontallist';

describe('<ListItem />', ()=>{
  let wrapper;
  let fixture = { type: 'scroll', index:0, width: 200 };

  const setup = (props)=>{
    wrapper = shallow(<ListItem {...props} />);
    console.log( props.type, ' : ', wrapper.debug() );
  }

  it('has .listitem by default', ()=>{
    setup(fixture);
    expect(wrapper.find('.listitem').length).toBe(1);
  });

  it('has .pageListItem by setting type as page', ()=>{
    // wrapper.setProps({ type:'page' });
    // wrapper.update();
    fixture.type = 'page';
    setup(fixture);
    expect(wrapper.find('.pageListItem').length).toEqual(1);
  });
});
