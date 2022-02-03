var vArray = ["421241421","7538423","5235235","32532525","532523532"];
var vRecuperado = "";

var vMaxNumero = 0;
var vSumaDigitos = 0;
vArray.forEach(function(element) {
    for(var i = 0; i <= element.length-1; i++)
    {
        vSumaDigitos += parseInt(element.substring(i,1))
    }
    if(vMaxNumero < vSumaDigitos)
    {
        vMaxNumero = vSumaDigitos;
        vRecuperado = element;
    }
    vSumaDigitos = 0;
});
console.log(vRecuperado);

//Function
function BuscarMaxLength(vArr,vRecupera) {
    var vMaxPalabra = 0;
    var vPos = 0;
    vArr.forEach(function(element,index) {
        if(vMaxPalabra < element.length)
        {
            vMaxPalabra = element.length;
            vPos = index
        }
    });
    vRecupera.push(vArr[vPos])
}