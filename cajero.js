class Billete
{
	constructor(monto,numero){
		this.monto=monto;
		this.numero=numero;
	}
}

var cinco=new Billete(5,5);
var diez=new Billete(10,2);
var veinte=new Billete(20,1);
var cincuenta=new Billete(50,5);
var colecciones=[];
colecciones.push(cincuenta);
colecciones.push(veinte);
colecciones.push(diez);
colecciones.push(cinco);
var dinero=prompt("Ingrese dinero a retirar");
console.log(dinero);
retirar(dinero); //QUIERO LA MENOR CANTIDAD DE BILLETES
function retirar(dinero){
	var retirados=[];
	var k=0;
		if(dinero<=0){
			alert("Cantidad a retirar no valida");
			return;
		}
		for(var i=0;i<colecciones.length &&dinero!=0;i++){
			var cociente=Math.floor(dinero/colecciones[i].monto);
			if(cociente<=colecciones[i].numero){
				dinero=dinero-cociente*colecciones[i].monto;
				//colecciones[i]=colecciones[i]-cociente;
				if(cociente!=0){
					retirados[k]=new Billete(colecciones[i].monto,cociente);
					k++;
				}
			}
		}
	console.log("FINAL"+retirados.length);
	if(dinero!=0){
		console.log("No es posible realizar el retiro de la cantidad ingresada");
		return;
	}
	for(var p of retirados){
		if(p.numero==1)
			console.log("1 Billete de denominacion: "+p.monto);
		else console.log(p.numero+" Billetes de denominacion: "+p.monto);
	}
}