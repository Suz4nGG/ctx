import React from 'react'
import ComponentContext1 from './components/ComponentContext1'
import ComponentContext2 from './components/ComponentContext2'
import ComponentRedux2 from './components/ComponentRedux2'
import { PageProvider } from './context/pageExt.context'

// * Context => Provedor
/*
* Proveedor
! Englobar los elementos que van a acceder a la información del contexto
*/

function PageEx() {
  // * Utilizamos el context
  return (
    <PageProvider>
      <ComponentContext1 />
      <ComponentContext2 />
      <h2>REDUX...</h2>
      <ComponentRedux2/>
    </PageProvider>
  )
}

export default PageEx