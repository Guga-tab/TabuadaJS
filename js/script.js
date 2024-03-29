var result = document.getElementById("result");
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const btn = document.getElementById("submit");

btn.addEventListener('click', () => {

result.innerHTML = "Resultado:<br>"

if (n2.value < 0){
   result.innerHTML = "Somente números positivos";
   setTimeout(() => { result.innerHTML = ''; } , 3000);
}else if (n2.value > 10) {
   result.innerHTML = "Somente números até 10";
   setTimeout(() => { result.innerHTML = ''; } , 3000);
}else if (n1.value == "" || n2.value == "") {
   result.innerHTML = "Campos vazios!";
   setTimeout(() => { result.innerHTML = ''; } , 3000);
}else {
   for (let i = 1; i <= n2.value; i++) {
      result.innerHTML += n1.value + " x " + i + " = " + n1.value * i + "<br>";
   }
}});