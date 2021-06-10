// JavaScript Document
let p1 = document.getElementById('Datos');
let p2 = document.getElementById('resultado');
let calculadora = document.getElementById('inicio');

function agregar(num){
	p1.innerHTML += num;
	calcular();
}

function calcular(){
	p2.innerHTML = eval(p1.innerHTML);
}

function borrar(){
	p1.innerHTML = "";
	p2.innerHTML = "";
}

function res(){
	p1.innerHTML = p2.innerHTML;
	p2.innerHTML = "";
}

function claro(){
	calculadora.classList.remove('oscuro');
	calculadora.classList.add('claro');
	
	let boton = document.querySelectorAll('.boton');
	let t = boton.length;
	for(i = t-1; i>=0; i--){
		boton[i].classList.remove('toscuro');
		boton[i].classList.add('tclaro');
	}
	
	p1.classList.remove('toscuro');
	p1.classList.add('tclaro');
	document.querySelector('.light').classList.add('activo');
	document.querySelector('.light').classList.remove('noactivo');
	document.querySelector('.dark').classList.add('noactivo');
	document.querySelector('.dark').classList.remove('activo');
	document.querySelector('body').classList.remove('claro');
	document.querySelector('body').classList.add('oscuro');
	document.querySelector('#panel').classList.add('bclaro');
	document.querySelector('#temaObs').classList.add('bclaro');
	document.querySelector('.borrar').classList.remove('tclaro');
	
	
	let oper = document.querySelectorAll('.operador');
	let o = oper.length;
	for(j = o-1; j>=0; j--){
		oper[j].classList.remove('oscuro');
		oper[j].classList.add('claro');
		oper[j].classList.remove('tclaro');
	}
}

function oscuro(){
	calculadora.classList.remove('claro');
	calculadora.classList.add('oscuro');
	
	let boton = document.querySelectorAll('.boton');
	let t = boton.length;
	for(i = t-1; i>=0; i--){
		boton[i].classList.remove('tclaro');
	}
	
	p1.classList.remove('tclaro');
	p1.classList.add('toscuro');
	document.querySelector('.light').classList.add('noactivo');
	document.querySelector('.light').classList.remove('activo');
	document.querySelector('.dark').classList.add('activo');
	document.querySelector('.dark').classList.remove('noactivo');
	document.querySelector('body').classList.remove('oscuro');
	document.querySelector('body').classList.add('claro');
	document.querySelector('#panel').classList.remove('bclaro');
	document.querySelector('#temaObs').classList.remove('bclaro');
	
	
	let oper = document.querySelectorAll('.operador');
	let o = oper.length;
	for(j = o-1; j>=0; j--){
		oper[j].classList.remove('claro');
	}
}