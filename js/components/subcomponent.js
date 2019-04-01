import React from 'react';

const SubComponent = props => {
  let { value, handleOnClick, nestedLevel, maxNestedLevel } = props;
  return (
    <div className="sub-component">
      {nestedLevel < maxNestedLevel && (
        <div className="component">
          <div className="desc">
            <h3>Value {value}</h3>
            <p className="faded">level {nestedLevel}</p>
          </div>
          <div className="action">
            <input type="button" onClick={handleOnClick} value="+1" />
          </div>
          <SubComponent
            maxNestedLevel={maxNestedLevel}
            nestedLevel={nestedLevel + 1}
            value={value}
            handleOnClick={handleOnClick}
          />
        </div>
      )}
      {nestedLevel === maxNestedLevel && <div>END</div>}
    </div>
  );
};

export default SubComponent;
