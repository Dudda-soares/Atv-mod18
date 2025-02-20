
document.addEventListener('DOMContentLoaded', function(){
    

    function verificar(e) {

        e.preventDefault();

        var data = new Date();
        var anoNasc = document.getElementById('txtano');
        var res = document.getElementById('resposta');
        var ano = data.getFullYear();
        var valido = true;
    
            if(anoNasc.value.length != 4 || Number(anoNasc.value) > ano){
                alert("[ERRO] Verifique os campos e tente novamente!")
                valido = false;
            }
    
            var rSexo = document.getElementsByName('radsex');
            var idade = ano - Number(anoNasc.value)
            var genero = ""
            var criarImg = document.createElement('img')
            criarImg.setAttribute('id','foto')
    
            
            if(rSexo[0].checked){
               
                if(idade >= 0 && idade < 10 ){
                    //criança
                    genero = 'Criança'
                    criarImg.setAttribute('src', '/src/img/menino.jpg')
                } else if ( idade < 21 ){
                    //jovem
                    genero = 'Jovem'

                    criarImg.setAttribute('src', '/src/img/jovemM.jpg')
                    
                } else if(idade < 50 ){
                    //adulto
                    genero = 'Adulto'

                    criarImg.setAttribute('src', '/src/img/adultoM.jpg')
                    
                }else{
                    //idoso
                    genero = 'Idoso'

                    criarImg.setAttribute('src', '/src/img/idoso.jpg')
    
                }
            } else if(rSexo[1].checked){
                genero = 'MULHER'
                if(idade >= 0 && idade < 10){
                    genero = 'Criança'
                    
                    criarImg.setAttribute('src', '/src/img/menina.jpg')
    
                } else if (idade < 21){
                    //jovem
                    genero = 'Jovem'
                    
                    criarImg.setAttribute('src', '/src/img/jovemf.jpg')
    
                } else if (idade < 50 ){
                    //adulto
                    genero = 'Adulta'

                    criarImg.setAttribute('src', '/src/img/adultoM.png')
    
                }else {
                    //idoso
                    genero = 'Idosa'

                    criarImg.setAttribute('src', '/src/img/idosa.jpg')
    
                }
                
            }else {
                alert('[ERRO]O Campo SEXO não foi selecionado!')
                valido = false
            }
    
            if (valido){
                res.style.textAlign = 'center'
                res.innerHTML = `Detectamos ${genero} com ${idade} anos`
                res.appendChild(criarImg)

                anoNasc.value = '';

            }
            
    
    }
    document.getElementById('botao').addEventListener('click', verificar);
})





