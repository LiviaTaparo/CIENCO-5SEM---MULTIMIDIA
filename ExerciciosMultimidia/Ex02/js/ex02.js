function categoria(){
    var idade = parseInt(document.getElementById('idade1').value);

    if(idade>=5 && idade<=7){
        document.write("<h1><strong>Infantil A!<strong></h1>");
    }else
    if (idade>=8 && idade<=10)
    {
        document.write("<h1><strong>Infantil B!<strong></h1>")
    }else
    if (idade>=11 && idade<=13)
    {
        document.write("<h1><strong>Juvenil A!<strong></h1>")
    }else
    if (idade>=14 && idade<=17)
    {
        document.write("<h1><strong>Juvenil B!<strong></h1>")
    }else
    if (idade>17)
    {
        document.write("<h1><strong>Senior!<strong></h1>")
    }
    else{
        document.write("<h1><strong>Idade inadequada para praticar!<strong></h1>");
    }
    

}