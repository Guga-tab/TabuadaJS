function calc() {
   const n1 = document.querySelector('#n1').value;
   const n2 = document.querySelector('#n2').value;
   const btn = document.getElementById("submit");

   var result = document.getElementById("result");

   if (n1 == "" || n2 == "") {
      result.innerHTML = "Campos vazios!";
      setTimeout(() => { result.innerHTML = ''; } , 3000);
   }

   else {
      for (let i = 0; i <= n2; i++) {
         result.innerHTML += n1 + " x " + i + " = " + n1 * i + "<br>";
         btn.style.display = 'none';
      }
   }
}