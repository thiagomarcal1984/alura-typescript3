import { Imprimivel } from "./imprimivel.js";

export function imprimir(...objetos: Array<Imprimivel>): void {
    // objetos.forEach(objeto => console.log(objeto.paraTexto()));
    for (let objeto of objetos) {
        console.log(objeto.paraTexto()) 
        // Agora o autocomplete funciona direito.
    }
}
