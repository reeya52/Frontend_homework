// Enter your code here

//console.log('Enter your code here');
let div = document.createElement("DIV");
let result = document.createElement("P");
let result_url = document.createElement("P");
let result_adr = document.createElement("P");
let result_qry = document.createElement("P");
let show_qry = document.createElement('P');
let a = document.createElement('a');
let set = false;

let eventButton = document.querySelector('.btn');
eventButton.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    
    let input_url = document.getElementById('comments').value;
     
    let r = new RegExp(/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/);
    if(!r.test(input_url)){
        window.alert("Invalid");
        div.remove(result);
        return false;
    } 
    
    a.href = input_url;

    div.id = 'result_block';
    div.style = "height: auto; width: 50%; position: fixed; z-index: 111; left: 25%; top: 45%; display: block; background: rgb(248, 249, 250); border-radius: 2%;"
    
    result.innerText = "Result";
    result.style = "font-size: 2.5rem; font-weight: bold; margin-left: 4%;"

    result_url.innerText = "URL";
    result_url.style = "font-size: 1.5rem; font-weight: bolder; margin-left: 4%;"

    if(input_url.includes('?')){
        let ptr = input_url.indexOf('?');
        result_adr.innerText = input_url.slice(0, ptr);
    }
    else{result_adr.innerText = input_url;}
    result_adr.style = "font-size: 1.3rem; margin-left: 4%;"

    div.appendChild(result);
    div.appendChild(result_url);
    div.appendChild(result_adr);

    let sub_qry = a.search;
    
    if(sub_qry){
        result_qry.innerText = "Query Parameters";
        result_qry.style = "font-size: 1.5rem; font-weight: bolder; margin-left: 4%;"

        sub_qry = sub_qry.replace('?', '').replaceAll('=', ': ').replaceAll('%40', '@').replaceAll('&', '\n');
        show_qry.innerText = sub_qry;
        show_qry.style = "font-size: 1.3rem; margin-left: 4%;"

        div.appendChild(result_qry);
        div.appendChild(show_qry);

        set = true                            // flag to true when first time query params occures

    }
    else{
        if(set){                                                  //if no query params then removes previous query params if any
            result_qry.parentNode.removeChild(result_qry);
            show_qry.parentNode.removeChild(show_qry);    
        }
    }

    document.body.appendChild(div);
});