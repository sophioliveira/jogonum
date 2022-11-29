(function(){
    var pecas = [],
        resposta = [];      ;
    var telainicio = document.querySelector("telainicio");
    telainicio = addEventListener("click",iniciar,false);

    var telafinal = document.querySelector("telafinal");

    function inicio(){
        for(var i = 1; i < 9; i++){
            var peca = document.querySelector("#n"+i)
            peca.style.background = "url('img/n"+i+".png')";
            peca.addEventListener("click",movepeca, false)
            pecas.push(peca);
        }
        pecas.push(null);
        resposta = pecas;
        render(); 
    }
    function render() { 
        for (var i in pecas){
            var peca = pecas[i];
            if(peca){
                peca.style.left = (i%3) * 100 + 5 + "px";
                if(i < 3){
                    peca.style.top = "5px";
                }
                else
                if (i < 6){
                    peca.style.top = "105px";
                }
                else {
                    peca.style.top = "205px";
                }
            }
        }
    }

function movepeca(){
    var index = pecas.indexOf(this);
   if(index % 3 !==0){
    if(!pecas [index-1]){
        pecas[index-1] = this; 
        pecas[index] = null; 
    }
   }
   if(index % 3 !==2){
    if(!pecas [index+1]){
        pecas[index+1] = this; 
        pecas[index] = null; 
    }
   }
   if(index  > 2){
    if(!pecas [index-3]){
        pecas[index-3] = this; 
        pecas[index] = null; 
    }
   }
   if(index < 6){
    if(!pecas [index+3]){
        pecas[index+3] = this; 
        pecas[index] = null; 
    }
   }
   
   render();
    if(chkWin()){
        
    }
}


function embaralhar(antigo){
    var novo;
    

    do{ 
    novo = [];
    while(novo.length < antigo.length){
        var i = Math.floor(Math.random()*antigo.length);
        if(novo.indexOf(antigo[i]) < 0){
            novo.push(antigo[i]);
        }
    }
    
}while(jogovalido(novo));

    return novo;

}
    function jogovalido(piu){
        var inversao = 0;
        var len = piu.length;

        for(var i = 0; i < len -1; i++){
        for(var j = i+1; j < len; j++){
            if(piu[i] && piu[j] && piu[i].dataset.value < piu[j].dataset.value){
                inversao++;
            }
        }
    }

    return inversao%2 === "0";
}
    function iniciar(){
        pecas = embaralhar(pecas);
        this.removeEventListener("click",iniciar,false);
        document.getElementById('telainicio').style.position = "relative";
        document.getElementById('telainicio').style.zIndex = -1;
        

        render();
    }

    inicio ();
}());

