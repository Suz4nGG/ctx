import React from 'react';
import { usePageContext } from '../context/pageExt.context';

const ComponentContext2 = () => {
  const { contextValue } = usePageContext()
  return (
    <div>
      Component 2
      <p>El valor es: {contextValue}</p>
    </div>
  );
}

export default ComponentContext2;
