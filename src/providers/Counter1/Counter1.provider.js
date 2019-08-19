import * as React from 'react';
import CounterContext1 from './Counter1.context';

const CounterProvider1 = ({ children }) => {
  const state = React.useState(0);

  return (
    <CounterContext1.Provider value={state}>{children}</CounterContext1.Provider>
  );
}

export default CounterProvider1;
