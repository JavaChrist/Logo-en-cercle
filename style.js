const text = document.querySelector(".logo .circle");
let textResult = "";

text.innerText.split("").forEach((char, index) => {
textResult += `<span style="transform: translateY(-50%) rotateZ(${(index+1) * 12}deg)"> ${char}</span>`; });

text.innerHTML = textResult;