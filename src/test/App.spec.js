import React from 'react';
import { mount } from 'enzyme';

import { App } from 'app/App';
import config from '../data/config.json';

describe('<App />', () => {
  let wrapper;
  let props = { config:config, requestConfig:()=>{} };

  beforeEach(() => {
    wrapper = mount( <App {...props} />);
    // console.log( 'App', wrapper.debug() );
  });

  it('allows us to set props', () => {
     expect( wrapper.instance().props.config ).toEqual( config );
  });
});
