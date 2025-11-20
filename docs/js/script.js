function checarRadio(respostasRad, certas){
    for(let i = 0; i<5;i++){

        if (!respostasRad[i]) {
            console.log("Pergunta sem resposta:", i + 1);
            continue;
        }

        let pergunta = Number(respostasRad[i].split('-')[0]);
        let resposta = respostasRad[i].split('-')[1];

        switch(pergunta){
            case 1:{
                if(resposta == 'a'){
                    certas ++;
                }
                break;
            }
            case 2:{
                if(resposta == 'b'){
                    certas ++;
                }
                break;
            }
            case 3:{
                if(resposta == 'c'){
                    certas ++;
                }
                break;
            }
            case 4:{
                if(resposta == 'a'){
                    certas ++;
                }
                break;
            }
            case 5:{
                if(resposta == 'b'){
                    certas ++;
                }
                break;
            }
            default:{
                console.log("resposta invalida");
                break;
            }
        }
    }

    return certas;
}

function validarArr(a,b){
    return a.every((val, i) => val === b[i]);
}


function checarCheck(certas){
    for(let i = 6; i<=10; i++){
        const respostasCheck = [...document.querySelectorAll("input[type='checkbox']:checked")].filter(cb => cb.id).map(cb => cb.id).filter(id => id.startsWith(i + "-"));
        let pergunta = null;
        if (!respostasCheck[0]) {
            console.log("Campo vazio");
        } else {
            pergunta = Number(respostasCheck[0].split("-")[0]);
        }
        let resposta = respostasCheck.map(id => id.split("-")[1]);
        


        switch (pergunta){
            case 6:{
                if(validarArr(resposta, ['a', 'b'])){
                    certas ++;
                }
                break;
            }
            case 7:{
                if(validarArr(resposta, ['a', 'b', 'd'])){
                    certas ++;
                }
                break;
            }
            case 8:{
                if(validarArr(resposta, ['a', 'b', 'd'])){
                    certas ++;
                }
                break;
            }
            case 9:{
                if(validarArr(resposta, ['a', 'c'])){
                    certas ++;
                }
                break;
            }
            case 10:{
                if(validarArr(resposta, ['b', 'c'])){
                    certas ++;
                }
                break;
            }
            default:{
                console.log("opçao invalida")
                break;
            }
        }
        

        console.log(pergunta);
        console.log(resposta);
    }

    return certas;

}



function enviaResposta(){
    const modal = document.getElementById("modal");

    modal.classList.add("show")
    
    const nome = document.getElementById("nome").value;

    document.getElementById("nomemodal").innerHTML = "Nome: " + nome;

    const respostasRad = [...document.querySelectorAll("input[type='radio']:checked")].filter(radio => radio.id).map(radio => radio.id);
    let certas = 0


    certas = checarRadio(respostasRad, certas);
    certas = checarCheck(certas);


    certas = certas/10*100;


    document.getElementById("successRate").innerHTML = "Acertos: " + certas + "%";




    console.log(respostasRad)
}




function fecharmodal(){
    const modal = document.getElementById("modal");

    modal.classList.remove("show")
    void modal.offsetWidth;
}
