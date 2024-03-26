regresApi = async () => {
    try{
        const url = 'https://jsonplaceholder.typicode.com/todos/'
        const response = await fetch(url)
        if (response.ok){
            const data =  await response.json()
            console.log(data[data.length - 1]); 
            for (const user of data) {
                if (user.id < 5){
                    console.log(`Id: ${user.id} |  Title: ${user.title}`);
                    console.log(user);
                }
            }
            console.log(`Total: ${data.length}`)
        } else{
            console.log(`Error...`);
            console.log(`Status Code: ${response.status}`);
        }
    }catch(err){
        console.log(err);
    }
};

regresApiPOST = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'História de Pedrow'
            })
        });
        if (response.ok){
            const data = await response.json()
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
};

regresApiPATCH = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/todos/1'
        const response = await fetch(url,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Titulo Novo (Pedrow)'
            })
        })
        if (response.ok){
            let data = await response.json()
            console.log(data);
            
        } else{
            console.log('Falha na Requisição');
            console.log(`Status Code: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error)
    }
};

regresApiDELETE = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/todos/1';
        const response = await fetch(url, {
            method: 'DELETE'
        });
        if (response.ok){
            const data = await response.json()
            console.log(`O Dado foi deletado com sucesso`);
        }else{
            console.log(`Error na Requisição`);
            console.log(`Status Code: ${response.status}`);
        };
    } catch (error) {
        console.log(error);
    };
};


regresApiDELETE()
regresApi()
regresApiPOST()
regresApiPATCH()
 