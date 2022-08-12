import React from 'react';
// import { useState } from 'react/cjs/react.development';
import Provider from './Tutorial/ContextAPI/Provider';
import Context from './Tutorial/ContextAPI/Context';
import './index.css';
import { useContext } from 'react';

const ChildThree = () => {
  const value = useContext(Context);
  console.log(value);

  return (
    <Context.Consumer>
      {(context) => {
        const changeAge = () => {
          context.setAge(context.person.age + 1);
        };
        return (
          <div>
            <h1>Person Name: {context.person.name}</h1>
            <h2>Person Age: {context.person.age}</h2>
            <button onClick={changeAge}>Change Age</button>
            <h2>Person Gender: {context.person.gender}</h2>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

const ChildTwo = () => {
  return (
    <div>
      <ChildThree />
    </div>
  );
};

const ChildOne = () => {
  return (
    <div>
      <h1>Children 1</h1>
      <ChildTwo />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Provider>
        <ChildOne />
      </Provider>
    </div>
  );
};

export default App;
