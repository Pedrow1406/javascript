const loginUser = (email,password, onSucess, onError) => {
    console.log('Log 2');
    const error = false;
    setTimeout(() => {
    	if (error){
            let erro = 'Falha na requisição de dados';
            return onError(erro);
        }
        onSucess(email, password);
    }, 1500);
}

const funcValidation = (email, password) => {
    if (email.includes('@')){
        console.log('User Logged!');
        console.log({email},{password});
    } else{
        console.log('Email Inválido. Erro!');
    }
}


const getUserVideos = (email, callback) => {
    setTimeout(() => {
        let videos = ['video1', 'video2', 'video3'];
        callback(videos);
    },1000)
}


const videoDetails = (video, callback) => {
    setTimeout(() => {
        callback(video);
    },1000)
}

console.log('Log 1');
let email  = loginUser('pedrow@gmail.com', 'sla2342', (email, password) => {
    if (email.includes('@')){
        console.log('User Logged!');
        console.log({email},{password});
        getUserVideos(email, (videos) => {
            console.log(`Videos de ${email}: ${videos}`);
            videoDetails(videos[0], (video_details) =>{
                console.log({'title': video_details});
            })
        })
    } else{
        console.log('Email Inválido. Erro!');
    }
}, (texto_erro) => {
    console.log(texto_erro)
});