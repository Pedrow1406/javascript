newButton = (text, callback) => {
    const $body = document.querySelector('body');
    const $button = document.createElement('button');
    $button.innerHTML = text;
    try{
        callback($button)
    }catch{} 
    $body.insertAdjacentElement('beforeend', $button);
}

newButton('Login', (element) => {
    login = () => {
        return element;
    }
    element.classList.add('botao_login');
    element.classList.add('no-opacity-login');
    element.addEventListener('click', () => {
        let botao_signup = signup();
        if (element.classList.contains('no-opacity-login')){
            element.classList.add('opacity');
            element.classList.remove('no-opacity-login');
            botao_signup.classList.add('no-opacity-signup');
            botao_signup.classList.remove('opacity');
        }
    })
});
newButton('Signup', (element) => {
    signup = () => {
        return element;
    }
    element.classList.add('opacity');
    element.classList.add('botao_signup');
    element.addEventListener('click', () => {
        let botao_login = login();
        if (element.classList.contains('no-opacity-signup')){
            element.classList.remove('no-opacity-signup');
            element.classList.add('opacity');
            botao_login.classList.remove('opacity');
            botao_login.classList.add('no-opacity-login');
        }
    })
});
