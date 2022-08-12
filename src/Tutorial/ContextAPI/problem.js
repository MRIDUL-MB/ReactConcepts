import React from 'react';
import { useState } from 'react/cjs/react.development';
import './index.css';

const Parent = ({ brandname }) => {
  return (
    <div>
      <h1>brandname</h1>
      <Child brandname={brandname} />
    </div>
  );
};

const Child = ({ brandname }) => {
  return <h1>Hey There {brandname}</h1>;
};

const App = () => {
  const [brandname] = useState('Amazon');
  return (
    <div>
      <h1>Hello World</h1>
      <Parent brandname={brandname} />
    </div>
  );
};

export default App;
