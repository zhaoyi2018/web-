var tag=-1;
var tag2=1;
var li_1 = document.getElementById("li_1");
var li_2 = document.getElementById("li_2");
var li_3 = document.getElementById("li_3");
var ul_1 = document.getElementById("ul_1");
var ul_2 = document.getElementById("ul_2");
var ul_3 = document.getElementById("ul_3");
var bi_d = document.getElementById("bi_d");
var bi_ds = document.getElementById("bi_ds");
var bi_dd = document.getElementById("bi_dd");
var mark1 = document.getElementById("mark1");
var mark2 = document.getElementById("mark2");
var mark3 = document.getElementById("mark3");
var mark4 = document.getElementById("mark4");
var box_in4 = document.getElementById("box_in4");
var bi4 = document.getElementById("bi4");
var bi44 = document.getElementById("bi44");
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var li_sum1 = document.getElementsByClassName("li_sum1");
var li_sum2 = document.getElementsByClassName("li_sum2");
var li_sum3 = document.getElementsByClassName("li_sum3");
var bi3 = document.getElementsByClassName("bi3");
for(var i=0;i<li_sum1.length;++i){
	li_sum1[i].onmouseover = function(){
		this.style.background = "#ff6600";
		this.style.color = "white";
	}
	li_sum1[i].onmouseleave = function(){
		this.style.background = "";
		this.style.color = "";
	}
	li_sum1[i].onclick = function(){
		li_1.innerHTML = this.innerHTML;
		li_1.style.borderColor = "#E9ECF0";
		ul_1.style.display = "none";
		ul_2.style.display = "block";
		li_2.style.display = "block";
	}
}
for(var i=0;i<li_sum2.length;++i){
	li_sum2[i].onmouseover = function(){
		this.style.background = "#ff6600";
		this.style.color = "white";
	}
	li_sum2[i].onmouseleave = function(){
		this.style.background = "";
		this.style.color = "";
	}
	li_sum2[i].onclick = function(){
		li_2.innerHTML = this.innerHTML;
		li_2.style.borderColor = "#E9ECF0";
		li_3.style.display = "block";
		ul_2.style.display = "none";
		ul_3.style.display = "block";
	}
}
for(var i=0;i<li_sum3.length;++i){
	li_sum3[i].onmouseover = function(){
		this.style.background = "#ff6600";
		this.style.color = "white";
	}
	li_sum3[i].onmouseleave = function(){
		this.style.background = "";
		this.style.color = "";
	}
	li_sum3[i].onclick = function(){
		bi_ds.innerHTML =li_1.innerHTML+li_2.innerHTML+this.innerHTML;
		li_1.innerHTML = "请选择";
		li_2.innerHTML = "请选择";
		li_3.innerHTML = "请选择";
		li_1.style.display = "block";
		li_1.style.borderColor = "red";
		li_2.style.display ="none";
		li_2.style.borderColor = "red";
		li_3.style.display ="none";
		ul_3.style.display = "none";
		ul_1.style.display = "block";
		bi_dd.style.display = "none";
		tag++;
	}
}
bi_ds.onclick = function(){
	tag++;
	if(tag%2===0){
		bi_dd.style.display = "block";
	}else{
		bi_dd.style.display = "none";
	}	
}
li_1.onclick = function(){
	li_2.style.display ="none";
	ul_2.style.display = "none";
	li_3.style.display ="none";
	ul_3.style.display = "none";
	ul_1.style.display = "block";
	li_1.style.borderColor = "red"
}
li_2.onclick = function(){
	li_3.style.display ="none";
	ul_3.style.display = "none";
	ul_2.style.display = "block";
	li_2.style.borderColor = "red";
}
for(var i=0;i<bi3.length;++i){
	bi3[i].onmouseover = function(){
		if(tag2 == 1)
			this.style.borderColor = "#ff6600";
	}
	bi3[i].onmouseleave = function(){
		if(tag2 == 1)
			this.style.borderColor = "";
	}
	bi3[i].onclick = function(){
		if(tag2 == 1){
			this.style.borderColor = "#ff6600";
			console.log(this.getAttribute("name"));
			if(this.getAttribute("name") == 1){
				box_in4.style.display = "block";
				bi4.innerHTML = "市场价：RMB200"
				bi44.innerHTML = "RMB150";
			}else if(this.getAttribute("name") == 2){
				box_in4.style.display = "block";
				bi4.innerHTML = "市场价：RMB400"
				bi44.innerHTML = "RMB300";
			}else if(this.getAttribute("name") == 3){
				box_in4.style.display = "block";
				bi4.innerHTML = "市场价：RMB600"
				bi44.innerHTML = "RMB450";
			}else{
				box_in4.style.display = "block";
				bi4.innerHTML = "市场价：RMB800"
				bi44.innerHTML = "RMB600";
			}
			tag2 = 0;
		}else{
			for(var m=0;m<bi3.length;++m){
				bi3[m].style.borderColor = "";
			}
			this.style.borderColor = "#ff6600";
			if(this.getAttribute("name") == 1){
				box_in4.style.display = "block";
				bi4.innerHTML = "市场价：RMB200"
				bi44.innerHTML = "RMB150";
			}else if(this.getAttribute("name") == 2){
				box_in4.style.display = "block";
				bi4.innerHTML = "市场价：RMB400"
				bi44.innerHTML = "RMB300";
			}else if(this.getAttribute("name") == 3){
				box_in4.style.display = "block";
				bi4.innerHTML = "市场价：RMB600"
				bi44.innerHTML = "RMB450";
			}else{
				box_in4.style.display = "block";
				bi4.innerHTML = "市场价：RMB800"
				bi44.innerHTML = "RMB600";
			}
		}
	}
}
a1.onclick = function(){
	if(tag2==1){
		alert("请选择尺寸!")
	}else{
		this.href = "../html/gouwu.html";
	}
}
a2.onclick = function(){
	if(tag2==1){
		alert("请选择尺寸!")
	}
}