import { createContext, useState, useContext } from "react";

export const PageContext = createContext()
// * useContext => Forma en la que se va a acceder a la información
export const PageProvider = ({children}) => {
  // * Utilizamos el context
  const [contextValue, setContextValue] = useState('')
  return (
    <PageContext.Provider value={{contextValue, setContextValue}}>
      {children}
    </PageContext.Provider>
  )
}

// ! Validamos que los componentes que se acceden esten dentro del contexto
export const usePageContext = () => {
  const context = useContext(PageContext)
  if (context === undefined) throw new Error('PageContext debe ser utilizado en el PageProvider')
  return context
}
