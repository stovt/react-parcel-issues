import React from 'react';
import { CounterProvider1 } from '../../providers/Counter1';
import { CounterProvider2 } from '../../providers/Counter2';
import HomeComponent from './Home.component';

const HomeContainer = () => (
  <CounterProvider1>
    <CounterProvider2>
      <HomeComponent />
    </CounterProvider2>
  </CounterProvider1>
);

export default HomeContainer;
