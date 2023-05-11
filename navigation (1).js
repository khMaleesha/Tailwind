function validate_form() { 
    let validate  = false,
        firstName = document.getElementById('first_name').value;
        
    if (!checkEmpty(firstName)) {
        validate = false;
        let error = document.getElementById('error1').innerHTML = "First name is required";
    }

    return false;
}

function validate_surname(){
    let validate = false,
    surname   =document.getElementById('surname').value;
    if(!checkEmpty(surname)){
        validate = false;
        let error=document.getElementById('error2').innerHTML = "Surname is required";
        
        }
}

function checkEmpty(value) { 
    alert(value)
    if (value || value === null || value == "") { 
        return false;
    }
}