import React from 'react';

const AdditionalFeature = props => {
  // console.log("additional feature", props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        className="button"
        onClick={() => props.add_feature(props.feature)}
        >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
