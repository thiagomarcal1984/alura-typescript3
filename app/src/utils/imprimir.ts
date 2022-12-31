import { Negociacao } from "../models/negociacao.js";

export function imprimir(...objetos: Array<any>): void {
    // objetos.forEach(objeto => console.log(objeto.paraTexto()));
    for (let objeto of objetos) {
        console.log(objeto.paraTexto()) 
        // Autocomplete não funciona direito, porque temos um array de any.
    }
}
