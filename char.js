var chars = document.getElementById("chars");
var charAtual = chars.options[localStorage.getItem("selectedChar")].id;
var char = criaChar();
var chaves = ["charNome", "charFOR", "charDES", "charVIT", "charCON", "charINT", "charFE", "charClass", "charPVA", "charPVT", "charPMA", "charPMT", "charRace", "charFloor", "charPB", "charSpeed", "charFer", "charESt", "charPWp", "charPSp", "charPAr", "charPOt"];

function selecChar() {
    charAtual = chars.options[chars.selectedIndex].id;
    localStorage.setItem("selectedChar", charAtual)
    window.location.reload();
}
window.onload = mostraChar();

function mostraChar() {
    chars.options[localStorage.getItem("selectedChar")].selected = true;
    for (i=0; i<char.length; i++) {
        document.getElementById(chaves[i]).value = char[i][chaves[i]];
    }
}


function salvaChar(i, dado) { 
    char[i][dado.id] = dado.value;
    localStorage.setItem(charAtual, JSON.stringify(char));
}

function criaChar() {
    let strChar = localStorage.getItem(charAtual);
    let leChar = [{"charNome":""}, {"charFOR":""}, {"charDES":""}, {"charVIT":""}, {"charCON":""}, {"charINT":""}, {"charFE":""}, {"charClass":""}, {"charPVA":""}, {"charPVT":""}, {"charPMA":""}, {"charPMT":""}, {"charRace":""}, {"charFloor":""}, {"charPB":""}, {"charSpeed":""}, {"charFer":""}, {"charESt":""}, {"charPWp":""}, {"charPSp":""}, {"charPAr":""}, {"charPOt":""}];
    
    if (strChar){
        leChar = JSON.parse(strChar);
    }
    return leChar;
}