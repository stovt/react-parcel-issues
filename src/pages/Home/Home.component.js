import React from 'react';
import { useCounterContext1 } from '../../providers/Counter1';
import { useCounterContext2 } from '../../providers/Counter2';

const Home = () => {
  const [counter1, setCounter1] = useCounterContext1();
  const [counter2, setCounter2] = useCounterContext2();

  const incrementCounter1 = React.useCallback(() => {
    setCounter1(c => c + 1);
  }, [setCounter1]);
  const decrementCounter1 = React.useCallback(() => {
    setCounter1(c => c - 1);
  }, [setCounter1]);

  const incrementCounter2 = React.useCallback(() => {
    setCounter2(c => c + 1);
  }, [setCounter2]);
  const decrementCounter2 = React.useCallback(() => {
    setCounter2(c => c - 1);
  }, [setCounter2]);

  return (
    <div>
      <p>Home page</p>
      <hr />
      <div>
        <div>Counter 1: <b>{counter1}</b></div>
        <button type="button" onClick={incrementCounter1}>Increment</button>
        <button type="button" onClick={decrementCounter1}>Decrement</button>
      </div>
      <hr />
      <div>
        <div>Counter 2: <b>{counter2}</b></div>
        <button type="button" onClick={incrementCounter2}>Increment</button>
        <button type="button" onClick={decrementCounter2}>Decrement</button>
      </div>
    </div>
  )
};

export default Home;
