function somaArray(list, callback){
    callback(list);
}

cb = (array) => {
    let result = 0;
    for (let a of array){
        result += a;
    }
    console.log(result);
}

const list_numbers = [1,2,7,10,12,8,27];
somaArray(list_numbers, cb)