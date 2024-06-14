function reajuste(){
    var salBruto = parseFloat(document.getElementById('salBruto').value);
    var salLiq = 0.00;

    if(salBruto<1000){
        salLiq = (salBruto+(salBruto*0.15));
        document.write("<h1><strong>Novo Salário: R$"+salLiq+"<strong></h1>");
    }else
    if (salBruto>=1000 && salBruto<=1500)
    {
        salLiq = (salBruto+(salBruto*0.1));
        document.write("<h1><strong>Novo Salário: R$"+salLiq+"<strong></h1>");
    }else
    if (salBruto>1500)
    {
        salLiq = (salBruto+(salBruto*0.05));
        document.write("<h1><strong>Novo Salário: R$"+salLiq+"<strong></h1>");
    }
    

}