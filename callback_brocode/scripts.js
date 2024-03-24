// callback = a function that is passed as an argument to another function.

sum = (x, y, callback) => {
    let result = x + y
    callback(result);
}
result = (result) => {
    console.log(result);
}

displayDom = (result) => {
    let $myh1 = document.getElementById('myH1');
    $myh1.innerHTML += ` ${result}`;
}

sum(199, 101, displayDom)