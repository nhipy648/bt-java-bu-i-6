// bt1
console.group("Vòng lặp while");
let n = 1;
let T = 0;
while (T < 100){
    T = T + n;
    n++;
 if(T > 100){
      console.log('số nguyên dương nhỏ nhất là:', n-1);
  } 

 }console.groupEnd();

//  bt2:
console.group("Vòng lặp for");
document.getElementById("evenbt2").onclick = function () {
    const resultEl = document.getElementById("result");
    
let x = document.getElementById("input1bt2").value;
let n = document.getElementById("input2bt2").value;
let S = 0;
let i = 1;
let T = 1;
    while (i <= n ){
        T = T * x;
        S = T + S;
        i++;
        
    }console.log ("đáp án", S)
    resultEl.style.display = "block";
    resultEl.innerHTML = S;
};

// bt3:
document.getElementById("evenbt3").onclick = function () {
    const result2El = document.getElementById("result2");
    
let n = document.getElementById("inputbt3").value;
let i = 1;
let S = 1;
while(i <= n){
    S = S * i;
   i++;
   console.log(n+S);
} result2El.style.display = "block";
result2El.innerHTML = S;
};

// bt4


document.getElementById("even4").onclick = function () {
    const resultVD4El = document.getElementById("resultVD4");
    const resultVD5El = document.getElementById("resultVD5"); 
    const resultVD6El = document.getElementById("resultVD6");
    const resultVD7El = document.getElementById("resultVD7");
    const resultVD8El = document.getElementById("resultVD8");
    const resultVD9El = document.getElementById("resultVD9");
    const resultVD10El = document.getElementById("resultVD10");
    const resultVD11El = document.getElementById("resultVD11");
    const resultVD12El = document.getElementById("resultVD12");
    const resultVD13El = document.getElementById("resultVD13");
    let html = "";
    resultVD4El.style.display = "block";
    resultVD4El.style.backgroundColor ="red";
    resultVD5El.style.display = "block";
    resultVD5El.style.backgroundColor = "blue";
    resultVD6El.style.display = "block";
    resultVD6El.style.backgroundColor ="red";
    resultVD7El.style.display = "block";
    resultVD7El.style.backgroundColor = "blue";
    resultVD8El.style.display = "block";
    resultVD8El.style.backgroundColor ="red";
    resultVD9El.style.display = "block";
    resultVD9El.style.backgroundColor = "blue";
    resultVD10El.style.display = "block";
    resultVD10El.style.backgroundColor ="red";
    resultVD11El.style.display = "block";
    resultVD11El.style.backgroundColor = "blue";
    resultVD12El.style.display = "block";
    resultVD12El.style.backgroundColor ="red";
    resultVD13El.style.display = "block";
    resultVD13El.style.backgroundColor = "blue";
result2El.innerHTML =html ;
function color (){
    
}
};