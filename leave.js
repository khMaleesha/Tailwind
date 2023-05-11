function validate_form(){
    let emp_number = document.getElementById('emp_number').value;
    if(emp_number==""){
        document.getElementById('error1').innerHTML="Employee Number Is Required";
        var element = document.getElementById("emp_number");
                element.classList.add("border-red-600");
    // return false;
    }else {
        document.getElementById('error1').innerHTML="";
        var element =document.getElementById('emp_number');
        element.classList.add('border-green-400');
    }
let emp_name = document.getElementById('emp_name').value;

if(emp_name==""){
    document.getElementById('error2').innerHTML="Employee Name Is Required";
    var element = document.getElementById("emp_name");
                element.classList.add("border-red-600");
// return false;
}else{
    document.getElementById('error2').innerHTML="";
    var element =document.getElementById('emp_name');
    element.classList.add('border-green-400');
}
let department =document.getElementById('department').value;
if(department==""){
    document.getElementById('error3').innerHTML="Department Is Reqiured";
    var element = document.getElementById("department");
                element.classList.add("border-red-600");
    return false;
}else {
    document.getElementById('error3').innerHTML="";
    var element =document.getElementById('deparyment');
    element.classList.add('border-green-400');
}
let leave_type =document.getElementById('leave_type').value;
if(leave_type==""){
    document.getElementById('error4').innerHTML="This Field Is Required";
    var element = document.getElementById("gate_pass_type");
            element.classList.add("border-red-600");
    // return false;
}else {
    document.getElementById('error4').innerHTML="";
    var element =document.getElementById('leave_type');
    element.classList.add('border-green-400');
}
let purpose=document.getElementById('purpose').value;
if(purpose==""){
    document.getElementById('error6').innerHTML="Purpose Is Required";
    var element = document.getElementById("purpose");
                element.classList.add("border-red-600");
                // return false;
}else {
    document.getElementById('error6').innerHTML="";
    var element =document.getElementById('purpose');
    element.classList.add('border-green-400');
}
}