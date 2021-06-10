// JavaScript Document
let productos=[[0,"coca",12],[1,"papas",10],[2,"chocolate",5],[3,"panditas",7],[4,"chicles",2]];

window.addEventListener("load",cargar);
function cargar(){

	for(i=0;i<productos.length;i++){
		document.querySelector('section').innerHTML+="<div id='"+productos[i][0]+"'>"+
														"<h1>"+productos[i][1]+"</h1>"+
														"<p>$"+productos[i][2]+"</p>"+
														"<button onclick='agregar("+productos[i][0]+")'>+</button>"+
														"</div>";
	
	
	document.querySelector('nav').innerHTML="<div class='pc'>"+
	"<h1>Lista de protuctos: </h1><br>"+
	"<p>"+"</p>"+
	"</div>";
	}

}

let carrito=[];
function agregar(id){
	carrito.push(id);
	document.querySelector('s').innerHTML=carrito.length;
	let listaProductos="";
	for(i=0;i<carrito.length;i++){
		for(j=0;j<productos.length;j++){
			if(productos[j][0]==carrito[i]){
				listaProductos+=" - "+productos[j][1]+ "   $"+productos[j][2]+"<br>";
				
			}
			
		}
	}
	document.querySelector('nav').innerHTML="<div class='pc'>"+
	"<h1>Lista de protuctos: </h1><br>"+
	"<p>"+listaProductos+"<br>"+"</p>"+
	"</div>";
}
function menu(){
document.getElementById('menu').classList.toggle('visible');
	let listaProductos="";
	
	for(i=0;i<carrito.length;i++){
		for(j=0;j<productos.length;j++){
			if(productos[j][0]==carrito[i]){
				listaProductos+=" - "+productos[j][1]+ "   $"+productos[j][2]+"<br>";
				
			}
			
		}
	}
	document.querySelector('nav').innerHTML="<div class='pc'>"+
	"<h1>Lista de protuctos: </h1><br>"+
	"<p>"+listaProductos+"<br>"+"</p>"+
	"</div>";
//"<p>$"+productos[i][2]+"</p>"
}

function Eliminar(id){
	carrito.push(id);
	document.querySelector('s').innerHTML=carrito.length;
	let listaProductos="";
	for(i=0;i<carrito.length;i++){
		for(j=0;j<productos.length;j++){
			if(productos[j][0]==carrito[i]){
				listaProductos+=" - "+productos[j][1]+ "   $"+productos[j][2]+"<br>";
				
			}
			
		}
	}
	document.querySelector('nav').innerHTML="<div class='pc'>"+
	"<h1>Lista de protuctos: </h1><br>"+
	"<p>"+listaProductos+"<br>"+"</p>"+
	"</div>";
}
