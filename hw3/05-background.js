// Enter your code here

//console.log('Enter your code here');
let interval1;
interval1 = setInterval(
    function () {
      let randomColor1 = Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = "#"+randomColor1;
    },3000);
let btnEvent = document.querySelector('.btn');
let input = document.getElementById('interval');
btnEvent.addEventListener('click', changeBg);

function changeBg(event){
  clearInterval(interval1);
  event.preventDefault();
  event.stopPropagation();
  
  let btn_value = document.querySelector('.btn');
  let input = document.getElementById('interval');
  if(btn_value.value == "Start"){
      btn_value.value = "Stop";
      input.disabled = true;
      interval1 = setInterval(
          function () {
            let randomColor2 = Math.floor(Math.random()*16777215).toString(16);
            document.body.style.backgroundColor = "#"+randomColor2;
          },input.value*1000);
  }
  else if(btn_value.value == "Stop"){
    btn_value.value = "Start";
    input.disabled = false;
    document.body.style.backgroundColor = "yellow";
  }
}
