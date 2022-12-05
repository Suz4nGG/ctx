import React from 'react';
import {useSelector } from "react-redux"
const ComponentRedux2 = () => {
  const userState = useSelector(store => store.user)
  return (
    <div>
      <p>State: {JSON.stringify(userState)}</p>
      redux2
    </div>
  );
}

export default ComponentRedux2;
