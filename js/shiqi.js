var my = document.getElementById("my");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");
var div5 = document.getElementById("div5");
var cart = document.getElementById("cart");
var sp = document.getElementById("sp");
var heart = document.getElementById("heart");
var mark = document.getElementById("mark");
var phone = document.getElementById("phone");
var customer = document.getElementById("customer");

my.onmouseover = function(){
	this.style.background = "#ff6600";
	this.style.cursor = "pointer";
	div1.style.display = "block";
}
my.onmouseleave = function(){
	this.style.background = "";
	div1.style.display = "none";
}
cart.onmouseover = function(){
	this.style.background ="#ff6600";
	this.style.cursor = "pointer";
	sp.style.background = "white";
}
cart.onmouseleave = function(){
	this.style.background ="";
	sp.style.background = "#ff6600";
}
heart.onmouseover = function(){
	this.style.background ="#ff6600";
	this.style.cursor = "pointer";
	div2.style.display = "block";
}
heart.onmouseleave = function(){
	this.style.background ="";
	div2.style.display = "none";
}
mark.onmouseover = function(){
	this.style.background ="#ff6600";
	this.style.cursor = "pointer";
	div3.style.display = "block";
}
mark.onmouseleave = function(){
	this.style.background ="";
	div3.style.display = "none";
}
phone.onmouseover = function(){
	this.style.background ="#ff6600";
	this.style.cursor = "pointer";
	div4.style.display = "block";
}
phone.onmouseleave = function(){
	this.style.background ="";
	div4.style.display = "none";
}
customer.onmouseover = function(){
	this.style.background ="#ff6600";
	this.style.cursor = "pointer";
	div5.style.display = "block";
}
customer.onmouseleave = function(){
	this.style.background ="";
	div5.style.display = "none";
}