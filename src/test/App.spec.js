import React from 'react';
import { mount } from 'enzyme';

import { App } from 'app/App';
import config from '../data/config.json';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount( <App config={config} requestConfig={()=>{}} />);
  });

  it('allows us to set props', () => {
     expect( wrapper.instance().props.config ).toEqual( config );
  });
});
