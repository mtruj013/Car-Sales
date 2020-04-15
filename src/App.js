import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import {addFeature, removeFeature} from './actions/carActions'


const App = props => {


 

  const removeFeature = item => {
    // dispatch an action here to remove an item
    //filter checking payload id
    props.removeFeature(item)
    
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
 
    props.addFeature(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.state.car} />
        <AddedFeatures car={props.state.car} remove_feature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures add_feature={buyItem} additionalFeatures={props.state.additionalFeatures} />
        <Total car={props.state.car} additionalPrice={props.state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state:state
  }
  
}

export default connect(
  mapStateToProps,
  { addFeature, removeFeature }
)(App);
