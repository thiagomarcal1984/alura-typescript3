export function domInjector(seletor: string) {
    return function(
        target: any,
        propertyKey: string
    ) {
        // Este comando só roda a cada injeção do decorator.
        console.log(`Modificando do prototype ${target.constructor.name}
            e adicionando getter para a propriedade ${propertyKey}...`)
        // Este getter é invocado sempre que o método/propriedade identificado
        // por propertyKey for invocado.
        const getter = function() {
            const elemento = document.querySelector(seletor);
            console.log(`Buscando o elemento do DOM com o seletor 
            ${seletor} para injetar em ${propertyKey}.`);
            return elemento;
        }
        Object.defineProperty(
            target, 
            propertyKey, 
            { get: getter }
        );
    }
}
