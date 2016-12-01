import React from 'react';
import { mount } from 'enzyme';

import { App } from 'app/App';
import config from '../data/config.json';
import ld from '../data/london.json';
import ny from '../data/ny.json';

describe('<App />', () => {
  let wrapper;
  let props = { config:{data:config},
                photoData: {data:{"ld":ld.photos, "ny":ny.photos}},
                requestConfig:()=>{},
                requestPhotoData: ()=>{},
                configInitialised: ()=>{}
               };

  beforeEach(() => {
    wrapper = mount( <App {...props} />);
    // console.log( 'App', wrapper.debug() );
  });

  it('allows us to set props', () => {
     expect( wrapper.instance().props.config ).toEqual( {data:config} );
  });
});
