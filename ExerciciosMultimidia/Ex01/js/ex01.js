function imc(){
    var peso = parseFloat(document.getElementById('peso1'));
    var altura = parseFloat(document.getElementById('altura1'));
    var imc = 0.00;

    imc=peso/(altura*altura);
    if(imc<20){
        document.write("<h1><strong>Você esta abaixo do peso!<strong></h1>");
    }else
    if (imc>=20 && imc <25)
    {
        document.write("<h1><strong>Você esta no peso ideal!<strong></h1>")
    }
    else{
        document.write("<h1><strong>Você esta acima do peso!<strong></h1>");
    }
    

}