transformString = (string, callback) => {
    callback(string);
}
 funcCallback = (string) => {
    let string_upper = string.toUpperCase();
    console.log(string_upper);
}

transformString("Exemplo de String", funcCallback);
