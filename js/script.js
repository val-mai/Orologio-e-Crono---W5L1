let oraclock;
let minuticlock;
let secondiclock;

data();

/* Orologio */

setInterval(function() {
    oraclock = new Date().getHours();
    minuticlock = new Date().getMinutes();
    secondiclock = new Date().getSeconds();

    scriviOrario();
    muoviLancette();


}, 1000)

function muoviLancette() {

    let lancettaore = document.getElementById("lancettaore");
    let lancettaminuti = document.getElementById("lancettaminuti");
    let lancettasecondi = document.getElementById("lancettasecondi");

    lancettasecondi.style.transform = "rotate(" + secondiclock * 360 / 60 + "deg)"
    lancettaminuti.style.transform = "rotate(" + minuticlock * 360 / 60 + "deg)"

    if (oraclock > 12) {
        oraclock = oraclock - 12;
    }
    lancettaore.style.transform = "rotate(" + (oraclock + (minuticlock/60)) * 360 / 12 + "deg)"

}

function scriviOrario() {

    if (oraclock < 9) {
        document.getElementById("oreclock").innerHTML = 0 + oraclock.toString();
    } else {
        document.getElementById("oreclock").innerHTML = oraclock.toString();
    }
    if (minuticlock < 9) {
        document.getElementById("minuticlock").innerHTML = 0 + minuticlock.toString();
    } else {
        document.getElementById("minuticlock").innerHTML = minuticlock.toString();
    }

}

function data() {
    giorno = new Date().getDate();
    document.getElementById('giorno').innerHTML = giorno;

    anno = new Date().getFullYear();
    document.getElementById('anno').innerHTML = anno;

    mese = new Date().getMonth();
    switch (mese) {
        case 0:
            mese = "Gennaio";
            break;
        case 1:
            mese = "Febraio";
            break;
        case 2:
            mese = "Marzo";
            break;
        case 3:
            mese = "Aprile";
            break;
        case 4:
            mese = "Maggio";
            break;
        case 5:
            mese = "Giugno";
            break;
        case 6:
            mese = "Luglio";
            break;
        case 7:
            mese = "Agosto";
            break;
        case 8:
            mese = "Settembre";
            break;
        case 9:
            mese = "Ottobre";
            break;
        case 10:
            mese = "Novembre";
            break;
        case 11:
            mese = "Dicembre";
    }

    document.getElementById('mese').innerHTML = mese;

}

/* Cronometro */

let stopcrono = true;
let orecrono = 0;
let minuticrono = 0;
let secondicrono = 0;
let centcrono = 0;

function startCrono() {
    stopcrono = false;
}

function pauseCrono() {
    stopcrono = true;
}

function resetCrono() {

    stopcrono = true;
    orecrono = 0;
    minuticrono = 0;
    secondicrono = 0;
    centcrono = 0;

    scriviCrono();

}

setInterval(function () {

    if (stopcrono == false) {
        centcrono++;
    }

    if (centcrono > 99) {
        centcrono = 0;
        secondicrono++;
    }
    if (secondicrono > 59) {
        secondicrono = 0;
        minuticrono++;
    }
    if (minuticrono > 60) {
        minuticrono = 0;
        oracrono++;
    }
    
    scriviCrono();

    }, 10)

function scriviCrono() {

    if (centcrono < 10) {
        document.getElementById('centcrono').innerHTML = 0 + centcrono.toString();
    } else {
        document.getElementById('centcrono').innerHTML = centcrono.toString();
    }

    if (secondicrono < 10) {
        document.getElementById('secondicrono').innerHTML = 0 + secondicrono.toString();
    } else {
        document.getElementById('secondicrono').innerHTML = secondicrono.toString();
    }

    if (minuticrono < 10) {
        document.getElementById('minuticrono').innerHTML = 0 + minuticrono.toString();
    } else {
        document.getElementById('minuticrono').innerHTML = minuticrono.toString();
    }

    if (orecrono < 10) {
        document.getElementById('orecrono').innerHTML = 0 + orecrono.toString();
    } else {
        document.getElementById('orecrono').innerHTML = orecrono.toString();
    }

}