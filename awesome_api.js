awesomeApi = async () => {
    response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
    data = await response.json();
    console.log(data);
    const dolartoreal = parseFloat(data.USDBRL.bid);
    let dolartoreal2 =  dolartoreal.toFixed(2);
    dolartoreal2 = dolartoreal2.replace('.',',');
    console.log(`$1 dolar equivale a R$${dolartoreal2} reais`);
}
awesomeApi();