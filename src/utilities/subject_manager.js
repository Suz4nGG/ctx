import { Subject } from "rxjs"
// * Observables => Subject (esté)
/*
! Observable JS Unicast
* Solo envia info
* Devolver el subject rompe primer principio de la programación POO => Encapsulamiento
*/
export class SubjectManager {
  subject$ = new Subject()
  // & Enviar información => subject.next()

  // * Observable Unicast
  getSubject() {
    // ! $ cuando la variable es asincrona
    const unicast = this.subject$.asObservable()
    return unicast
  }

  // * Enviamos info a quien lo quiera esuchar
  setSubject(value) {
    this.subject$.next(value)
  }
}