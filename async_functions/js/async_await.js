        // Definição de async e await
// Dentro de uma função async, o código abaixo de um await aguardará o resolve ou reject da promise, enquanto o código fora da função async continuará a ser executado normalmente.

const loginUser = (email, password) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const error = false;  
            if (error) {
                let erro = 'Falha na requisição de dados';
                return reject(erro);// A variavel que recebe a execução dessa função recebe o que é passado como parametro para reject (como se fosse um retorno)
            };
            const usuario = {email, password};
            console.log('User Logged!');
            console.log(`Email: ${usuario.email}`);
            console.log(`Password: ${usuario.password}`);
            resolve(usuario);// A variavel que recebe a execução dessa função recebe o que é passado como parametro para resolve (como se fosse um retorno)
        }, 1000);
    });
};
setTimeout(()=>{
    console.log('Fora da Função Async')
},2500)
const getUserVideos = (email) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Dentro da Função Async');
            let videos = ['video1', 'video2', 'video3'];
            console.log(`Videos de ${email}: ${videos}`);
            resolve(videos);
        },2000);
        console.log(getUserVideos);
    });
};

const videoDetails = (video) => {
    return new Promise((resolve) => {
         setTimeout(() => {
           resolve(video);
        },2000);
        console.log(videoDetails);
    });
};
//          async/await
const displayUser = async () => {
    try{
        const user = await loginUser('pedrow@gmail.com', 'sla3i24'); // Na função async a proxima linha so será executada quando o await executar um reject ou um resolve
        console.log(`displayUser: ${user.email}, ${user.password}`);
        const videos =  await getUserVideos(user.email);
        const video = await videoDetails(videos[2]);
        console.log(`Detalhes do ${video}`);
    } catch (erro_recebido){
        console.log(`Erro: ${erro_recebido}`)
    }
};

displayUser();


//         Callback
// loginUser('pedrow@gmail.com', 'sla2342', (email, password) => {
//     getUserVideos(email, (videos) => {
//         videoDetails(videos[0], (video_details) =>{
//             console.log(`Detalhes do ${video_details}`);
//         });
//     });
// }, (texto_erro) => {
//     console.log(texto_erro)
// });


//      Promise Chaining
// loginUser('pedrow@gmail.com', 'sla3i24') 
// .then((user) => getUserVideos(user.email))
// .then((videos) => videoDetails(videos[0]))
// .then((video) => console.log({video}))
// .catch((erro) => console.log(erro));

//async function displayUser(){}