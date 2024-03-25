const loginUserPromess = (email, password) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const error = false;  
            if (error) {
                let erro = 'Falha na requisição de dados';
                return reject(erro);
            };
            const usuario = {email, password};
            console.log('User Logged!');
            console.log(`Email: ${usuario.email}`);
            console.log(`Password: ${usuario.password}`);
            return resolve(usuario); 
        }, 1000);

    });
};

const getUserVideos = (email) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let videos = ['video1', 'video2', 'video3'];
            console.log(`Videos de ${email}: ${videos}`)
            return resolve(videos);
        },1000);
    });
};

const videoDetails = (video) => {
    return new Promise((resolve) => {
         setTimeout(() => {
           return resolve(video)
        },1000);
    });
};

loginUserPromess('pedrow@gmail.com', 'sla3i24') 
.then((user) => getUserVideos(user.email))
.then((videos) => videoDetails(videos[0]))
.then((video) => console.log({video}))
.catch((erro) => console.log(erro));

const yt = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Estou no Youtube')
    }, 1000);
});

const fc = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Estou no facebook')
    }, 5000);
});

Promise.all([yt, fc]).then((text) => console.log(`Youtube Text: ${text[0]}\nFacebook Text: ${text[1]}`))