function funcao_principal(callback){
    console.log('Estamos na função principal e vamos redireciona-lo para outra função')
    callback()
}
cb = () => {
    console.log('Agora estamos no callback')
}
funcao_principal(cb)