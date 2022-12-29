export function logarTempoDeExecucao () {
    return function(
        target: any, // Recebe o construtor ou o Prototype da classe. 
        propertyKey: string, // Nome do método que será invocado no decorator.
        descriptor: PropertyDescriptor // Objeto para definir o comportamento.
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function() {
            const t1 = performance.now();
            const retorno = metodoOriginal()
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2-t1)/1000} segundos.`)
            retorno
        }
        
        return descriptor;
    }
}
