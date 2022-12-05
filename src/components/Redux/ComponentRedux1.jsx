import React from 'react';
import { useDispatch } from 'react-redux'
import { createUser } from '../../redux/states/user';
//* dispatcher => Despachar las acciones, recibe las acciones, las manda al store, store las recibe en el reducer
const ComponentRedux1 = () => {
  const dispatcher = useDispatch()
  const handleClick = () => {
    dispatcher(createUser({name: "Susana", email: "scx@gmail.com"}))
  }
  return (
    <div>
      <button onClick={handleClick}>
        Crear Usuario
      </button>
      redux1
    </div>
  );
}

export default ComponentRedux1;
