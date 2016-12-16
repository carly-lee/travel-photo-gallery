import React from 'react';
import { mount } from 'enzyme';
import Preload from 'react-preload';

import { Popup } from 'components/popup';
import { Icon, IconTypes } from 'components/icon';

describe('<Popup />', ()=>{
  let wrapper;
  const closePopup = jest.fn();
  const props = {data:{"src":"/images/LD/LD_0.jpg", "thumbnail":"/images/LD/thumbnail/LD_0.jpg", "location":" "}, closePopup};

  beforeEach(()=>{
    wrapper = mount( <Popup {...props} /> );
  });

  it('allows us to set props', ()=>{
    expect( wrapper.props().data ).toEqual(props.data);
  });

  it('calls closePopup when clicked', ()=>{
    wrapper.simulate('click');
    expect(closePopup).toHaveBeenCalled();
  });

  it('shows a pre-loader', ()=>{
    expect(wrapper.find(Preload).length).toEqual(1);
    expect(wrapper.find(Preload).text()).toContain('Loading...');
  });
});
