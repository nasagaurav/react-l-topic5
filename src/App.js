import React, { lazy, Suspense } from 'react';
import './style.css';
import Example2 from './Example2';
import Example3 from './Example3';
import Example4 from './Example4';
// import Example1 from './Example1'
// const Example1 = lazy(() => import('./Example1'));
export default function App() {
  return (
    <div>
      {/* <Suspense fallback={'loading...'}>
        <Example1 />
      </Suspense> */}
      <Example2 />
      <Example3 />
      <Example4 />
    </div>
  );
}
