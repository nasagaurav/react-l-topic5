import React, { useEffect, useState } from 'react';

function Example1() {
  const [a, seta] = useState([]);

  const boot = () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    fetch(url)
      .then((d) => d.json())
      .then((d) => seta(d.slice(0,10)));
  };
  useEffect(boot, []);
  return (
    <div>
      <h1>Example1</h1>
      {/* {a.map(x=><img  width="10" src={x.url} />)} */}
    </div>
  );
}

export default Example1;
