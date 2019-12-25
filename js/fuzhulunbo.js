var outPa=document.getElementById("outPa");
var imgArr=document.getElementsByClassName("soSmall")[0].children;

console.log(imgArr);

for(var i=0;i<imgArr.length;i++){
	imgArr[i].onclick=function(){
		outPa.src=this.getAttribute("name");
		for(var j=0;j<imgArr.length;j++)
			imgArr[j].style.borderColor="#d9d9d9";
		this.style.borderColor="#ff6a00";
	}
}