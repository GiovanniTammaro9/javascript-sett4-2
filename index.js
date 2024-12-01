//promise.all
function funzione1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("risultato della funzione 1");
        }, 3000);
    });
}

function funzione2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("risultato della funzione 2");
        }, 1000);
    });
}

Promise.all([funzione1(), funzione2()])
.then((risultati) => {
    console.log("entrambe le promise sono risolte");
    console.log(risultati);
})
.catch((errore) => {
    console.log("errore durante l'esecuzione delle promise", errore);
});
//promise.race
function funzione3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("risultato della funzione 3");
        }, 3000);
    });
}

function funzione4() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("risultato della funzione 4");
        }, 1000);
    });
}

Promise.race([funzione3(), funzione4()])
.then((risultati) => {
    console.log("la prima promise risolta è:");
    console.log(risultati);
})
.catch((errore) => {
    console.log("errore durante l'esecuzione delle promise", errore);
});