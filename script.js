let htmlCode = document.getElementById('html');
let cssCode = document.getElementById('css');
let jsCode = document.getElementById('js');
let output = document.getElementById('output');

function updateOutput(){
let htmlContent=htmlCode.value;
let cssContent= "<style>" + cssCode.value + "</style";
output.contentDocument.body.innerHTML=htmlContent + cssContent;
output.contentWindow.eval(jsCode.value)
}

htmlCode.addEventListener("keyup", updateOutput);
cssCode.addEventListener("keyup", updateOutput);
jsCode.addEventListener("keyup", updateOutput);

