window.timerCost = 0;

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import SubComponent from './components/subcomponent';

const App = () => {
  const [value, setValue] = useState(0);
  const [maxNestedLevels, setMaxNestedLevels] = useState(10);
  const [groupCount, setGroupCount] = useState(3);

  const handleOnClick = () => {
    setValue(value + 1);
  };

  const handleOnNestedLevelChange = e => {
    let _value = e.target.value;
    if (_value < 1) {
      _value = 1;
    }
    setMaxNestedLevels(e.target.value);
  };
  const handleOnGroupCountChange = e => {
    let _value = e.target.value;
    if (_value < 1) {
      _value = 1;
    }
    setGroupCount(e.target.value);
  };

  let countIndex = [];
  for (let i = 0; i < groupCount; i++) {
    countIndex.push(i);
  }

  let NestedComponents = countIndex.map(key => (
    <div className="sub-component-wrapper" key={key}>
      <SubComponent maxNestedLevel={maxNestedLevels} nestedLevel={0} value={value} handleOnClick={handleOnClick} />
    </div>
  ));

  return (
    <div>
      <h1>Test app to benchmark performance with passing state, and lifting state up</h1>
      <p>
        current value from state: <b>{value}</b>
      </p>
      <label>
        Nested count:
        <input type="number" min={1} onChange={handleOnNestedLevelChange} value={maxNestedLevels} />
      </label>

      <label>
        Group count:
        <input type="number" min={1} onChange={handleOnGroupCountChange} value={groupCount} />
      </label>

      <input type="button" onClick={handleOnClick} value="Increment by +1" />
      <hr />
      <div className="wrapper">{NestedComponents}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
