function calcular(){
    var salMin = parseFloat(document.getElementById('salMin').value);
    var hora = parseFloat(document.getElementById('hora').value);
    
    var vlHora = (salMin/2);
    var salBruto = hora*vlHora;
    var imposto = salBruto*0.03;
    var salLiq = salBruto-imposto;

    document.write("<h1><Strong>Salario Minímo: R$"+salMin+"</Strong></h1>");
    document.write("<h1><Strong>Horas Trabalhadas: R$"+hora+"</Strong></h1>");
    document.write("<h1><Strong>Valor Hora: R$"+vlHora+"</Strong></h1>");
    document.write("<h1><Strong>Salario Bruto: R$"+salBruto+"</Strong></h1>");
    document.write("<h1><Strong>Valor Imposto: R$"+imposto+"</Strong></h1>");
    document.write("<h1><Strong>Salario Líquido: R$"+salLiq+"</Strong></h1>");
    

}