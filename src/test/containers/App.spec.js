import React from 'react';
import { mount } from 'enzyme';

import { App } from 'containers/App';
import { HorizontalList } from 'components/horizontallist';
import { Popup } from 'components/popup';
import { Carousel } from 'components/carousel';
import { OPEN_POPUP } from 'actions/PopupActions';
import configData from '../../data/config.json';
import ld from '../../data/london.json';
import ny from '../../data/ny.json';
import pr from '../../data/paris.json';
import ro from '../../data/rome.json';

describe( '<App />', () => {
	let wrapper;
	const requestConfig = jest.fn();
	const requestPhotoData = jest.fn();
	const configInitialised = jest.fn();
	const openPopup = jest.fn();
	const closePopup = jest.fn();
	const config = { type:'', data:configData };
	const photoData = { data:{ 'ld':ld.photos, 'ny':ny.photos, 'pr':pr.photos, 'ro':ro.photos }};
	const popup = { type:OPEN_POPUP, data:{ 'index':0, 'id':'ld', 'src':'/images/LD/LD_0.jpg', 'thumbnail':'/images/LD/thumbnail/LD_0.jpg', 'location':' ' }};

	let props = { config:{ type:'', data:null }, photoData: { data:null }, popup: { type:'', data:null }, requestConfig, requestPhotoData, configInitialised, openPopup, closePopup };

	const setup = ()=>{
		wrapper = mount( <App {...props} /> );
	};

	it( 'shows Loading when there is no data', () => {
		setup();
		expect( wrapper.find( '.loading' ).text()).toEqual( 'Loading...' );
	});

	it( 'calls requestConfig when there is no config', () => {
		setup();
		expect( requestConfig ).toHaveBeenCalled();
	});

	it( 'calls configInitialised and requestPhotoData when received config data', () => {
		setup();
		wrapper.setProps({ config });
		expect( wrapper.props().config ).toEqual( config );
		expect( configInitialised ).toHaveBeenCalled();
		expect( requestPhotoData ).toHaveBeenCalledTimes( Object.keys( configData.photoData ).length );
	});

	it( 'shows Carousel when there is config', ()=>{
		props = Object.assign({},props,{ config, photoData });
		setup();
		expect( wrapper.find( Carousel ).length ).toEqual( 1 );
	});

	it( 'shows HorizontalList', ()=>{
		setup();
		expect( wrapper.find( HorizontalList ).length ).toEqual( Object.keys( configData.photoData ).length );
	});

	it( 'shows Popup when there is popupData', ()=>{
		setup();
		expect( wrapper.find( Popup ).length ).toEqual( 0 );
		wrapper.find( '.listItem' ).first().simulate( 'click' );
		wrapper.setProps({ popup });
		expect( wrapper.find( Popup ).length ).toEqual( 1 );
	});
});
