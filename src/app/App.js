import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestConfig } from 'actions/ConfigActions';

import { HorizontalList } from 'components/horizontallist';
import styles from './app.css';

export class App extends Component {

  componentWillMount(){
    this.props.requestConfig();
  }

  _getHorizontalScroll(cities){
    return cities.map((city, idx, array)=>{
      return <HorizontalList key={idx} title={city.name} />;
    });
  }

  render() {
    const { config } = this.props;
    return (
      <div>
        <h1 className={styles.title}>My travel photo gallery</h1>
        <p className={styles.description}>These are photos I have taken while travel several cities.</p>
        { config ? this._getHorizontalScroll(config.cities) : <div>Loading...</div> }
      </div>
    );
  }
}

App.propTypes = {
  config: React.PropTypes.object,
  requestConfig: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    config: state.config.data
  }
};

function mapDispatchToProps(dispatch) {
  return {
    requestConfig: () => dispatch(requestConfig())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
