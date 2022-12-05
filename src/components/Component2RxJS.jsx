import React, { useEffect, useState } from 'react';
import { sharingInformationService } from '../services/sharing-information.service';
// ! Recibe la información
// * Es quien se suscribe
const Component2 = () => {
  const [count, setCount] = useState(0)
  const subscription$ = sharingInformationService.getSubject()
  useEffect(() => {
    //* objeto que revisa es la data
    subscription$.subscribe((data) => {
      // * String como forma de validar => aun que sea '0', 0, null, undefined los valida de ambas formas
      !!data ? setCount(count + 1) : console.log("No data")
    })
  })
  return (
    <div>
      Componente 2 |
      { count }
    </div>
  );
}

export default Component2;
