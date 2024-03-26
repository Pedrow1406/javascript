async function exemplo() {
    console.log('Antes do await');
    await algumaPromise();
    console.log('Depois do await');
}

function algumaPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Resolvendo a promessa');
            resolve();
        }, 2000);
    });
}

console.log('Início do código');
exemplo();
console.log('Fim do código');
