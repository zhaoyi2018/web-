var bg3=document.getElementById("bg3_1");
var timpId=null;
var box_first=bg3.children[0];
// var timeId2=null;
var tempNum=3;
var start=600;

function dodo5(){
	var temp=0;
	tempId=setInterval(function(){
		box_first.setAttribute("style", "opacity:"+(temp+=0.1));
		if(temp==1)
			clearInterval(tempId);
	},100);
}

function dodo4(){
	start=1000;
	var newElement=document.createElement("img");
	newElement.src="../images/duihua2.png";
	newElement.style.position="absolute";
	newElement.style.right=1000+"px";
	bg3.appendChild(newElement);
	tempId=setInterval(function(){
		animate(newElement,{right:start-=50});
		if(start==400){
			clearInterval(tempId);
			setTimeout(function(){
				bg3.removeChild(bg3.children[3]);
				dodo5();
			},3000);
			return;
			// dodo2();
		}
	},100);
}



function dodo3(){
	start=600;
	var newElement=document.createElement("img");
	newElement.src="../images/ren.png";
	newElement.style.position="absolute";
	newElement.style.right=600+"px";
	newElement.style.top="200px";
	bg3.appendChild(newElement);
	tempId=setInterval(function(){
		animate(newElement,{right:start-=50});
		if(start==100){
			clearInterval(tempId);
			// setTimeout(function(){
			// 	bg3.removeChild(bg3.children[1]);
			dodo4();
			// },2000);
			return;
			// dodo2();
		}
	},100);
}

function dodo2(){
	start=1000;
	var newElement=document.createElement("img");
	newElement.src="../images/duihua1.png";
	newElement.style.position="absolute";
	newElement.style.left=1000+"px";
	// newElement.style.top="45px";
	bg3.appendChild(newElement);
	tempId=setInterval(function(){
		animate(newElement,{left:start-=50});
		if(start==400){
			clearInterval(tempId);
			setTimeout(function(){
				dodo3();
				bg3.removeChild(bg3.children[2]);
			},3000);
			return;
			// dodo2();
		}
	},100);
}


function dodo1(){
	var newElement=document.createElement("img");
	newElement.src="../images/zuichan.gif";
	newElement.style.position="absolute";
	newElement.style.left=start+"px";
	newElement.style.top="200px";
	bg3.appendChild(newElement);
	tempId=setInterval(function(){
		animate(newElement,{left:start-=50});
		if(start==100){
			clearInterval(tempId);
			setTimeout(function(){dodo2();},1000);
		}
	},100);
}


window.onload=function(){
	tempId=setInterval(function(){
		var newElement=document.createElement("h1");
		// newElement.style.fontSize=60;
		newElement.innerHTML=tempNum--;
		if(tempNum<2){
			bg3.removeChild(bg3.children[1]);
			if(tempNum==-2){
				clearInterval(tempId);
				dodo1();
				return;
			}
		}
		bg3.appendChild(newElement);
	}, 1000);
}
