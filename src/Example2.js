import React, { useState, useMemo } from 'react';

function Example2() {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [z, setz] = useState(0);

  const p1 = () => setx(x + 1);
  const p2 = () => sety(y + 1);
  const p3 = () => setz(z + 1);
  const title = useMemo(() => <Title />, []);
  const text1 = useMemo(() => <Text value={x} />, [x]);
  const text2 = useMemo(() => <Text value={y} />, [y]);
  const text3 = useMemo(() => <Text value={z} />, [z]);
  const btn1 = useMemo(() => <Button onClick={p1}>+x</Button>, [x]);
  const btn2 = useMemo(() => <Button onClick={p2}>+y</Button>, [y]);
  const btn3 = useMemo(() => <Button onClick={p3}>+z</Button>, [z]);

  return (
    <div>
      {title}
      {text1}
      {text2}
      {text3}
      {btn1}
      {btn2}
      {btn3}
    </div>
  );
}
export default Example2;

function Title() {
  console.log('title comp');
  return <h1>title</h1>;
}
function Button(props) {
  console.log('button comp');
  return <button onClick={props.onClick}>{props.children}</button>;
}
function Text(props) {
  console.log('text comp');
  return <p>{props.value}</p>;
}
