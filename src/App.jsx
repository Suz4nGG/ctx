import './App.css'
import Component1 from './components/Component1RxJS'
import Component2 from './components/Component2RxJS'
import PageEx from './page/PageEx'
// ! Provider de Redux
import { Provider } from 'react-redux'
// * Store del usuario
import { UserStore } from './redux/store'
import ComponentRedux1 from './components/Redux/ComponentRedux1'
import ComponentRedux2 from './page/components/ComponentRedux2'
// ! Toda la aplicación => Una entidad
// * Usuario en amazón => Si se cambia de pantalla el carrito seguira REDUX
// * Información más actualizada posible
// & Context => Solo información entre una página
// * RXJS => Modal, Botones 1° EVENTOS
/*
* Carpeta utilities =>
*/
function App() {
  return (
    <Provider store={UserStore}>
      <div className="App">
        <Component1 />
        <Component2 />
      </div>
      <div className='App'>
        <h2>Context</h2>
        <PageEx />
      </div>
      <div>
        <h2>REDUX</h2>
        <ComponentRedux1 />
        {/* <ComponentRedux2 /> */}
      </div>
    </Provider>
  )
}

export default App
