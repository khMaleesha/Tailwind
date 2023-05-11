// function validate_form(){
//     let validate  = false;
//     emp_name = document.getElementById('emp_name').value;
   
    
//     if (!checkEmpty(emp_name)) {
//         validate = false;
//         let error = document.getElementById('error1').innerHTML = "Employee Name Is Required";
//         return false;
//     }
 
//     emp_no = document.getElementById('emp_no').value;
//     if (!checkEmpty(emp_no)) {
//         validate = false;
//         let error = document.getElementById('error2').innerHTML = "Employee Number Is Required";
//         return false;
//     }
// }
// function checkEmpty(value) { 
 
//     if (value || value === null || value == "") { 
//         return false;
//     }
// }



function validate_form(){
    let emp_name = document.getElementById('emp_name').value;
    if(emp_name==""){
        document.getElementById('error1').innerHTML="Employee Name Is Required";
        var element = document.getElementById("emp_name");
                element.classList.add("border-red-600");
    // return false;
    }else {
        document.getElementById('error1').innerHTML="";
        var element =document.getElementById('emp_name');
        element.classList.add('border-green-400');
    }
let emp_no = document.getElementById('emp_no').value;

if(emp_no==""){
    document.getElementById('error2').innerHTML="Employee Name Is Required";
    var element = document.getElementById("emp_no");
                element.classList.add("border-red-600");
// return false;
}else {
    document.getElementById('error2').innerHTML="";
    var element =document.getElementById('emp_no');
    element.classList.add('border-green-400');
}
let department =document.getElementById('department').value;
if(department==""){
    document.getElementById('error3').innerHTML="Department Is Reqiured";
    var element = document.getElementById("department");
                element.classList.add("border-red-600");
    // return false;
}else {
    document.getElementById('error3').innerHTML="";
    var element =document.getElementById('department');
    element.classList.add('border-green-400');
}
let gatepass =document.getElementById('gate_pass_type').value;
if(gatepass==""){
    document.getElementById('error4').innerHTML="Gate Pass Type Is Reqiured";
    var element = document.getElementById("gate_pass_type");
            element.classList.add("border-red-600");
    return false;
}else {
    document.getElementById('error4').innerHTML="";
    var element =document.getElementById('gatepass');
    element.classList.add('border-green-400');
}
let purpose=document.getElementById('purpose').value;
if(purpose==""){
    document.getElementById('error5').innerHTML="Purpose Is Required";
    var element = document.getElementById("purpose");
                element.classList.add("border-red-600");
                return false;
}else {
    document.getElementById('error5').innerHTML="";
    var element =document.getElementById('purpose');
    element.classList.add('border-green-400');
}
}

// function validate_form(){
//     let emp_name=document.getElementById('emp_name').value;
//     if(emp_name>1){
//     console.log("Succeess")
//     }else{
//         document.getElementById('error1').innerHTML="Employee Name Is Reuired";
//         var element = document.getElementById("emp_name");
//         element.classList.add("border-red-600");
//         return false;
//     }
//     }