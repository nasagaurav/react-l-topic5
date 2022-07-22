import React, { lazy, Suspense } from 'react';
import './style.css';
import Example2 from './Example2';
import Example3 from './Example3';
import Example4 from './Example4';
export default function App() {
  return (
    <div>
      <Example2 />
      <Example3 />
      <Example4 />
    </div>
  );
}
