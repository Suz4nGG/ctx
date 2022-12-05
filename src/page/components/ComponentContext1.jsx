import React from 'react';
import { usePageContext } from '../context/pageExt.context';

const ComponentContext1 = () => {
  const { setContextValue } = usePageContext()
  const handleClick = () => {
    setContextValue("Hola gg")
  }
  return (
    <button onClick={handleClick}>Info por un context</button>
  );
}

export default ComponentContext1;
