let joao = 1;
let maria = 2;

function deJoaoParaMaria(){
    maria += joao;
    joao = 0;
}

function deMariaParaJoao(){
    joao += maria;
    maria = 0;
}

function getJoao(){
    return joao;
}

function getMaria(){
    return maria;
}

function setJoao (m){
    joao = m;
}

function setMaria (m){
    joao = m;
}

export {deJoaoParaMaria, deMariaParaJoao, getJoao, getMaria, setJoao, setMaria};