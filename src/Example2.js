import React, { useState } from 'react';

function Example2() {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [z, setz] = useState(0);

  const p1 = () => setx(x + 1);
  const p2 = () => sety(y + 1);
  const p3 = () => setz(z + 1);
  return (
    <div>
      <Title />
      <Text value={x} />
      <Text value={y} />
      <Text value={z} />
      <Button onClick={p1}>+x</Button>
      <Button onClick={p2}>+y</Button>
      <Button onClick={p3}>+z</Button>
    </div>
  );
}
export default Example2;

function Title() {
  console.log('title comp');
  return <h1>title</h1>;
}
function Button() {
  console.log('button comp');
  return <button>button</button>;
}
function Text(props) {
  console.log('text comp');
  return <p>{props.value}</p>;
}
