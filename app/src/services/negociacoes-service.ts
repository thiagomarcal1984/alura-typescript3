import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch("http://localhost:8080/dados") //Indica o path a ser lido.
            // O primeiro parm de then contém o retorno se resposta estiver ok.
            .then(res => res.json())
            .then((dados: NegociacoesDoDia[]) => {
                // O retorno vai ser um Array de Negociações.
                return dados.map(dado => {
                    return new Negociacao(
                        new Date(), 
                        dado.vezes, // O JSON já converte para number.
                        dado.montante
                    )
                })
            });
    }
}
