function filtraArray(array, callback){
    console.log('Bem Vindo a Função Principal')
    console.log('Entrando no Callback...')
    callback(array);
    console.log('Bem Vindo a Função Principal denovo')

}

funcCallback = (array) => {
    console.log('Entrou no Callback')
    let novoarray = [];
    for (let a of array){
        if (a % 2 == 0){
            novoarray.push(a);
        }
    }
    console.log('Voltando para Função Principal')
    console.log(`Novo Array: ${novoarray}`)
}

const list = [3, 2, 1, 6, 3, 4, 1, 9];
filtraArray(list, funcCallback)
