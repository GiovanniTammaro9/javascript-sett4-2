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
//promise con allsettled
function funzione5() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("risultato della funzione 5");
        }, 3000);
    });
}
function funzione6() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("risultato della funzione 6");
        }, 1000);
    });
}
function funzione7() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("errore nella funzione 7");
        }, 1500);
    });
}

Promise.allSettled([funzione5(), funzione6(), funzione7()])
.then((risultati) => {
    console.log("tutte le promise sono state completate (risolte o rifiutate)");
    risultati.forEach((risultato, index) => {
        if (risultato.status === "fulfilled") {
            console.log(`promise ${index + 1} risolta: ${risultato.value}`);
        }else {
            console.log(`promise ${index + 1} rifiutata: ${risultato.reason}`);
        }
    });
});
//promise asincrona
function promiseConMessaggio() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("messagggio della promise dopo 2 secondi");
        }, 2000);
    });
}

async function esegui() {
    try {
        const messaggio = await promiseConMessaggio();
        console.log(messaggio);
    }catch (errore) {
        console.error("si è verificato un errore", errore);
    }
    
}

esegui();