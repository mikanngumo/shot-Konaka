function chauch() {
 var input = document.getElementById('get-nomber');
 var input2 = document.getElementById('get-nomber2');
 if (input.value == pass1){
  if (input2.value == pass2){
   const element = document.querySelector('#wrap');
   element.insertAdjacentHTML('beforeend', '<iframe src="https://example.com/" style="position: fixed; width: 100vw; height: 100vh; inset: 0px; background-color: white; border: none;"></iframe>'); //ここのiframeのリンク変えて
  }
 }
 maynomber = ((input.value * 1 ) + (input2.value * 1))
 maynomber = maynomber * -1
 if (maynomber >= 0){
  maynomber = "+" + maynomber;
 }
 maynomber2 = input.value * input2.value
 if (maynomber2 >= 0){
  maynomber2 = "+" + maynomber2;
 }

 const expr="x^2"+maynomber+"x"+maynomber2;
       katex.render(expr, document.getElementById('equation'), {
        displayMode:true,
        throwOnError: false
      });
}