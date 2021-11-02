// Enter your code here

//console.log('Enter your code here');

let input_number = document.getElementById('number');
input_number.addEventListener('input', (event) => {
    let number = document.getElementById('number').value;
    let result = document.getElementById('result');

    if(Math.sign(number) == -1 ){
        result.innerHTML = "Please enter positive number";            //in html, the input type for number field is "number" so by default it will not take string inputs fom user, that is why I just added validation for negative number.
        result.style = "color: red";
    }
    else{
        let len = number.length;
        let mid = Math.floor(len/2);
        if(len == 0){
            result.innerHTML = "No";
            result.style = "color: black";
        }
        else{
            for(let i=0; i<=mid; i++){
                if(number[i]!=number[len-1-i]){
                    result.innerHTML = "No. Try again";
                    result.style = "color: red";
                    break;
                }
                else{
                    result.innerHTML = "Yes. This is a palindrome";
                    result.style = "color: green";
                    break;
                }
            }
        }
    }

   
});