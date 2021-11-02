// Enter your code here

//console.log('Enter your code here');

let eventForm = document.querySelector('form');
eventForm.addEventListener('submit', getFormData);

function getFormData(event) {
    event.preventDefault();
    event.stopPropagation();

    var regName = /^[A-Za-z]+$/;
    let input_name = document.getElementById('name').value;           //get name from user and print on console
    if(!regName.test(input_name)){
        window.alert("Invalid name, please give valid name");
        return false;
    }
    else{
        console.group('=======Form Submission=======');
        console.log('Name: ', input_name);
    }

    let input_email = document.getElementById('email').value;          // get email from user and print on console
    console.log('Email: ', input_email);

    let input_regStatus = document.getElementById('registration-status').value;         // for class registration list
    if(input_regStatus == ""){
        console.log('Class Registration: No registration status')
    }
    else{
        console.log('Class Registration: ', input_regStatus);
    }

    if(document.getElementById('CS410-P').checked == true){                   // for class section redio buttons
        console.log('Class Section: Undergraduate');
    }
    else if(document.getElementById('CS510').checked == true){
        console.log('Class Section: Graduate');
    }
    else{ console.log('Class selection: no selection');}
 
    let input_checkbox = [];                                                 // for courses taken checkboxes
    input_checkbox = document.getElementsByName('courses');
    let checkbox_label = "Courses Taken: ";
    if(input_checkbox[0].checked == true){
        checkbox_label += "Programming Languages";
        if((input_checkbox[1].checked == true) && (input_checkbox[2].checked == true)){
            checkbox_label += ", Operating Systems, Full Stack Web Development";
        }
        else if(input_checkbox[1].checked == true){
        checkbox_label += ", Operating Systems";
        }
        else if(input_checkbox[2].checked == true){
        checkbox_label += ", Full Stack Web Development";
        }
    }
    else if(input_checkbox[1].checked == true){
        checkbox_label += "Operating Systems";
        if(input_checkbox[2].checked == true){
            checkbox_label += ", Full Stack Web Development";
        }
    }
    else if(input_checkbox[2].checked == true){
        checkbox_label += "Full Stack Web Development";
    }
    else{
        checkbox_label += "none of the courses";
    }
    console.log(checkbox_label);

    let input_feedback = document.getElementById('comments').value;                   // for added comment textbox
    if(input_feedback == ""){
        console.log('Feedback: no feedback'); 
    }
    else{
        console.log('Feedback: ', input_feedback);
    }

    console.groupEnd();
}