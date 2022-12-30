export function logarTempoDeExecucao (emSegundos: boolean = false) {
    return function(
        target: any, // Recebe o construtor ou o Prototype da classe. 
        propertyKey: string, // Nome do método que será invocado no decorator.
        descriptor: PropertyDescriptor // Objeto para definir o comportamento.
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2-t1)/divisor} ${unidade}.`)
            retorno
        }
        
        return descriptor;
    }
}
