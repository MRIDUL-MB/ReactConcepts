import React from 'react';
import { useState } from 'react';
import PackageContext from './Context';

const Provider = (props) => {
  const [person, setPerson] = useState({
    name: 'Mridul',
    age: 20,
    gender: 'Male',
  });
  return (
    <PackageContext.Provider
      value={{
        person,
        setAge: (num) => {
          setPerson({ ...person, age: num });
        },
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};

export default Provider;
