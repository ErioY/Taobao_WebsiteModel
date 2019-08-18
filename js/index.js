var oHeader = document.getElementsByTagName("header")[0];
var oMenu = oHeader.getElementsByTagName("ul")[0];
var oInput = oHeader.getElementsByTagName("input")[0];

oInput.onclick = oMenu.onmouseover = function (){
    oMenu.style.display = "block";
    oMenu.style.opacity = 1;
}
oInput.onmouseout = function (){
    oMenu.style.display = "none";
    oMenu.style.opacity = 0;
}
