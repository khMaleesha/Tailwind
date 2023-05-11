function validate_form(){
let first_name =document.forms["myForm"]["first_name"].value;
let surname =document.forms["myForm"]["surname"].value;
// let nic = document.forms["myForms"]["nic"].value;
// let birthday=document.forms["myForms"]["nic"].value;
// let blood_group = document.forms["myForms"]["blood_group"].value;
// let department = document.forms["myForms"]["department"].value;
// let designation=document.forms["myForms"]["designation"].value;
// let contact_mobile=document.forms["myForms"]["contact_mobile"].value;
// let contact_address=document.forms["myForms"]["contact_address"].value;
if(first_name ==""){
    alert("Name Must Be Filled");
    return false;
}
if(surname ==""){
    alert("Surname Must Be Filled");
return false;
}
//  if(nic ==""){
//     alert ("NIC Must Be Filled");
//     return false;
// }

// if(birthday==""){
//     alert ("Birthday Must Be Filled");
//     return false;
// }

// if(blood_group==""){
//     alert("Blood Group Must Be Filled");
// return false;
// }

// if(department==""){
//     alert("Department Must Be Filled");
//     return false;
// }

// if(designation==""){
//     alert("This Field Must Be Filled");
//      return false;
// }

// if(contact_mobile==""){
//     alert("Mobile Number Must Be Filled");
//     return false;
// }

// if(contact_address==""){
//     alert("Address Must Be Filled");
//     return false;
// }
}
