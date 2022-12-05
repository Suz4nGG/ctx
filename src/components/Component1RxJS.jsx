import React from 'react';
import { sharingInformationService } from '../services/sharing-information.service';

const Component1 = () => {
  const dataForm = {
    name: "Susana",
    age: 20
  }
  const handleClickSend = () => {
    sharingInformationService.setSubject(true)
  }

  const handleClickNoSend = () => {
    sharingInformationService.setSubject(false)
  }
  return (
    <div>
      <button onClick={handleClickSend}>Envia info</button>
      <button onClick={handleClickNoSend}>No enviar info</button>
    </div>
  );
}

export default Component1;
