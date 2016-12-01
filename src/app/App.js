import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestConfig, configInitialised, CONFIG_INITIALISED } from 'actions/ConfigActions';
import { requestPhotoData } from 'actions/PhotoDataActions';
import { HorizontalList } from 'components/horizontallist';
import { Carousel } from 'components/carousel';
import styles from './app.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.props.requestConfig();
  }

  componentWillMount(){
  }

  componentWillReceiveProps(nextProps){
    const { config, photoData } = nextProps;

    if( config.type === CONFIG_INITIALISED ) return;
    if( config.data ){
      this.props.configInitialised();
      for( let key in config.data ){
        this.props.requestPhotoData( config.data[key].url );
      }
    }
  }

  _getHorizontalScroll(config, photoData){
    if( Object.keys(config.data).length === Object.keys(photoData.data).length ){
      let list = [];
      for( let key in photoData.data ){
        list.push(<HorizontalList key={key} title={config.data[key].name} photos={photoData.data[key]}/>);
      }
      return list;
    }
  }

  render() {
    const { config, photoData } = this.props;

    if( photoData.data ){
      return(
        <div>
          <Carousel />
          {this._getHorizontalScroll(config, photoData)}
        </div>
      )
    }else{
      return (
        <div>
          <div>Loading...</div>
        </div>
      );
    }
  }
}

App.propTypes = {
  config: React.PropTypes.object,
  photoData: React.PropTypes.object,
  requestConfig: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    config: state.config,
    photoData: state.photoData
  }
};

function mapDispatchToProps(dispatch) {
  return {
    requestConfig: () => dispatch(requestConfig()),
    requestPhotoData: ( photoDataUrl ) => dispatch( requestPhotoData( photoDataUrl )),
    configInitialised: ()=> dispatch(configInitialised())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
