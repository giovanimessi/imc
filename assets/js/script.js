$(function(){

    $('button').bind('click',function(){
      
        var altura = $('#altura').val();

        var altura = altura.replace(',','.');


        var peso = $('#peso').val();

        var peso = peso.replace(',','.');

        var imc = peso /(altura * altura);

    if(imc < 16){
        var resposta = 'Baixo peso,muito grave'
    }else if (
        imc >=16 && imc  < 16.99 ){
         var   resposta = 'Baixo peso,grave';
        }else if(imc >= 17 && imc < 18.49){
           var reposta ='baixo peso';

        }else if(imc >= 18.50 && imc < 24.99){
           var resposta = 'peso normal';
        
        }else if(imc >= 25 && imc < 29.99){
            var resposta =  'sobrepeso';
        }else if(imc >= 30 && imc < 34.99){
            var resposta =  'obsesidade grau 1';
        }else if(imc >= 35 && imc < 39.99){
            var resposta =  'obsesidade grau 2';
        }else if(imc >=40 ){
            var resposta =  'obesidade grau 3';
        }

        $('#resultado').html('O IMC é: '+imc+ ' KG/M²'+ 'sobre os dados e a escala é:' + resposta);



    })
})