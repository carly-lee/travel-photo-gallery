import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestConfig, configInitialised, CONFIG_INITIALISED } from 'actions/ConfigActions';
import { requestPhotoData } from 'actions/PhotoDataActions';
import { openPopup, closePopup, OPEN_POPUP } from 'actions/PopupActions';
import { HorizontalList } from 'components/horizontallist';
import { Carousel } from 'components/carousel';
import { Popup } from 'components/popup';
import styles from './app.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.props.requestConfig();
  }

  componentWillReceiveProps(nextProps){
    const { config, photoData } = nextProps;

    if( config.type === CONFIG_INITIALISED ) return;
    if( config.data ){
      this.props.configInitialised();
      for( let key in config.data.photoData ){
        this.props.requestPhotoData( config.data.photoData[key].url );
      }
    }
  }

  _onPhotoClick = ( data )=>{
    console.log( 'onPhotoClick:', data );
    this.props.openPopup( data );
  }

  _getHorizontalScroll(config, photoData){
    const configData = config.data.photoData;
    if( Object.keys(configData).length === Object.keys(photoData.data).length ){
      let list = [];
      for( let key in photoData.data ){
        list.push(<HorizontalList key={key} id={key} title={configData[key].name} date={configData[key].date} photos={photoData.data[key]} onPhotoClick={this._onPhotoClick} />);
      }
      return list;
    }
  }

  render() {
    const { config, photoData, popup, closePopup } = this.props;

    if( photoData.data ){
      const popupData = popup && popup.type === OPEN_POPUP ? photoData.data[popup.data.id][popup.data.index] : null;
      
      return(
        <div>
          <Carousel list={config.data.carousel} />
          {this._getHorizontalScroll(config, photoData)}
          { popupData ? <Popup
            closePopup={closePopup} data={popupData} /> : '' }
        </div>
      )
    }else{
      return (
        <div>
          <div className={styles.loading}>Loading...</div>
        </div>
      );
    }
  }
}

App.propTypes = {
  config: React.PropTypes.object,
  photoData: React.PropTypes.object,
  popup: React.PropTypes.object,
  requestConfig: React.PropTypes.func.isRequired,
  requestPhotoData: React.PropTypes.func.isRequired,
  configInitialised: React.PropTypes.func.isRequired,
  openPopup: React.PropTypes.func.isRequired,
  closePopup: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    config: state.config,
    photoData: state.photoData,
    popup: state.popup
  }
};

function mapDispatchToProps(dispatch) {
  return {
    requestConfig: () => dispatch(requestConfig()),
    requestPhotoData: (photoDataUrl) => dispatch( requestPhotoData(photoDataUrl)),
    configInitialised: ()=> dispatch(configInitialised()),
    openPopup: (data)=> dispatch(openPopup(data)),
    closePopup: ()=> dispatch(closePopup())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
