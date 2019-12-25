var reduce=document.getElementsByClassName("btOut");
var add=document.getElementsByClassName("btIn");
var delet=document.getElementsByClassName("delet");
var bg=document.getElementById("web4-cart");
var money=document.getElementById("money");
var ku3=document.getElementsByClassName("ku3");
var sp=document.getElementById("sp");
var down=document.getElementsByClassName("down")[0];

window.onload=function(){
	var sum=0;
	for(var i=0;i<ku3.length;i++)
		sum+=parseInt(ku3[i].innerHTML.slice(1));
	money.innerHTML=sum;
	down.style.marginTop=150+90*(ku3.length)+"px";
}

for(var i=0;i<reduce.length;i++){
	reduce[i].onclick=function(){
		var input1=this.nextElementSibling;
		if(input1.value!=1){
			input1.value=parseInt(input1.value)-1+"";
			var newMoney=input1.parentNode.previousElementSibling;
			money.innerHTML=parseInt(money.innerHTML)-parseInt(newMoney.innerHTML.slice(1));
		}
	}
}

for(var i=0;i<add.length;i++){
	add[i].onclick=function(){
		var input1=this.previousElementSibling;
		input1.value=parseInt(input1.value)+1+"";
		var newMoney=input1.parentNode.previousElementSibling;
		money.innerHTML=parseInt(money.innerHTML)+parseInt(newMoney.innerHTML.slice(1));
	}
}

for(var i=0;i<delet.length;i++){
	delet[i].onclick=function(){
		var temp=confirm("你确定要删除该商品吗？");
		if(temp==true){
			var elements=this.parentNode.parentNode;
			var price=parseInt(elements.children[2].innerHTML.slice(1));
			var num=parseInt(elements.children[3].children[1].value);
			money.innerHTML=parseInt(money.innerHTML)-price*num;
			bg.removeChild(elements);
			sp.innerHTML=parseInt(sp.innerHTML)-1+"";
			down.style.marginTop=parseInt(down.style.marginTop)-90+"px";
			if(bg.children.length==1){
				var bigCart=bg.parentNode;
				var child=bigCart.children;
				bigCart.removeChild(child[1]);
				bigCart.removeChild(child[0]);
				var newE=document.createElement("img");
				newE.className="imgg1";
				newE.src="../images/ps/gwc_k2.jpg";
				bigCart.appendChild(newE);
				var newE2=document.createElement("a");
				newE2.innerHTML="去逛逛!";
				newE2.href="../html/first2.html";
				newE2.className="imgg2";
				bigCart.appendChild(newE2);
				down.style.marginTop=34+281+"px";
			}
		}
	}
}