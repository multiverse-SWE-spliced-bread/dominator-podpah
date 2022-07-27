const patty = document.getElementById("patrick")

function shh() {patty.innerText = patty.innerText.toLowerCase()}

function scream() {patty.innerText = patty.innerText.toUpperCase()}

function sarc() {
    let str = " ";
    let gogoat = false;
    for(i in patty.innerText) {
        if (patty.innerText[i] != " ") {
            if(!patty.innerText[i].match("[a-zA-Z]")) {str+= patty.innerText[i]; continue}
            if(!gogoat) {str += patty.innerText[i].toLowerCase(); gogoat = true}
            else{str += patty.innerText[i].toUpperCase();gogoat = false}
        }
        if (patty.innerText[i] == " ") {str += patty.innerText[i]; continue;}
    }
    patty.innerText = str
}
