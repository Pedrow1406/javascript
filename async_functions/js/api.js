const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => {
    console.log({data: response.data})
}).catch((error) => {
    console.log({error});
})

fetchApi = async () => {
    try{
        const response = await fetch('https ://jsonplaceholder.typicode.com/todos/1')
        console.log(await response.json()) 
        if (response.ok){
            const data  = await response.json()
            console.log(data);
        } else{
            console.log(`Falha na Requisição`);
            console.log(`Status da resposta: ${response.status}`);
        };
    } catch (err){
        console.log(`Error: ${err}`);
    };
};
fetchApi()
