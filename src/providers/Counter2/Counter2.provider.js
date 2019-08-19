import * as React from 'react';
import CounterContext2 from './Counter2.context';

const CounterProvider2 = ({ children }) => {
  const state = React.useState(0);

  return (
    <CounterContext2.Provider value={state}>{children}</CounterContext2.Provider>
  );
}

export default CounterProvider2;
