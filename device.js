function validate_form(){
    let emp_no =document.getElementById('emp_no').value;
    if(emp_no==""){
        document.getElementById('error1').innerHTML="Employee Number Is Required";
        var element = document.getElementById("emp_no");
        element.classList.add("border-red-600");
        // return false;
    }else{
        document.getElementById('error1').innerHTML="";
        var element = document.getElementById("emp_no");
        element.classList.add("border-green-500");
    }
    
    let emp_name=document.getElementById('emp_name').value;
    if(emp_name==""){
        document.getElementById('error2').innerHTML="Employee Name Is Required";
        var element = document.getElementById("emp_name");
        element.classList.add("border-red-600");
        // return false;
    }else{
        document.getElementById('error2').innerHTML="";
        var element = document.getElementById("emp_name");
        element.classList.add("border-green-500");
    }
    
   let department=document.getElementById('department').value;
   if(department==""){
    document.getElementById('error3').innerHTML="Department Is Required";
    var element = document.getElementById("department");
    element.classList.add("border-red-600");
    // return false;
   }else{
    document.getElementById('error3').innerHTML="";
    var element = document.getElementById("department");
    element.classList.add("border-green-500");
}

   let device_type=document.getElementById('device_type').value;
   if(device_type==""){
    document.getElementById('error4').innerHTML="Device Type Is Required";
    var element = document.getElementById("device_type");
    element.classList.add("border-red-600");
    // return false;
    }else{
        document.getElementById('error4').innerHTML="";
        var element = document.getElementById("emp_name");
        element.classList.add("border-green-500");
    }
    let device_brand = document.getElementById('device_brand').value;
    if(device_brand==""){
document.getElementById('error5').innerHTML="Device Brand Is Requied";
var element = document.getElementById("device_brand");
element.classList.add("border-red-600");
return false;
    }else{
        document.getElementById('error5').innerHTML="";
        var element = document.getElementById("device_brand");
        element.classList.add("border-green-500");
    }
    let device_model =document.getElementById('device_model').value;
    if(device_model==""){
        document.getElementById('error6').innerHTML="Device Model Is Required";
        var element = document.getElementById("device_model");
element.classList.add("border-red-600");
        // return false;
    }else{
        document.getElementById('error6').innerHTML="";
        var element = document.getElementById("device_model");
        element.classList.add("border-green-500");
    }
    let model_number=document.getElementById('model_number').value;
    if(model_number==""){
        document.getElementById('error7').innerHTML="Model Number is Required";
        var element = document.getElementById("model_number");
        element.classList.add("border-red-600");
    // return false;
    }else{
        document.getElementById('error7').innerHTML="";
        var element = document.getElementById("model_number");
        element.classList.add("border-green-500");
    }
    let display_model=document.getElementById('display_model').value;
    if(display_model ==""){
        document.getElementById('error8').innerHTML="Display Model is Required";
        var element = document.getElementById("display_model");
        element.classList.add("border-red-600");
        return false;
    }else{
        document.getElementById('error8').innerHTML="";
        var element = document.getElementById("display_model");
        element.classList.add("border-green-500");
    }
    let memory_size =  document.getElementById('memory_size').value;
    if(memory_size==""){
        document.getElementById('error9').innerHTML="Memory Size Is Required";
        var element = document.getElementById("memory_size");
        element.classList.add("border-red-600");
        return false;
    }else{
        document.getElementById('error9').innerHTML="";
        var element = document.getElementById("memory_size");
        element.classList.add("border-green-500");
    }
    let hard_disk =documenr.getElementById('hard_disk').value;
    if(hard_disk==""){
document.getElementById('error10').innerHTML="This Field Must Be Filled";
var element = document.getElementById("hard_disk");
element.classList.add("border-red-600");
return false;   
}else{
    document.getElementById('error10').innerHTML="";
    var element = document.getElementById("hard_disk");
    element.classList.add("border-green-500");
}
    let graphic_card_model=document.getElementById('graphic_card_model');
    if(graphic_card_model==""){
        document.getElementById('error11').innerHTML="This Field Must Be Filled";
        var element = document.getElementById("graphic_card_model");
element.classList.add("border-red-600");
        return false;
    }else{
        document.getElementById('error11').innerHTML="";
        var element = document.getElementById("graphic_card_model");
        element.classList.add("border-green-500");
    }
    let others= document.getElementById('others').value;
    if(others==""){
        document.getElementById('error12').innerHTML="This Field Must Be Filled";
        var element = document.getElementById("others");
        element.classList.add("border-red-600");
        return false;
    }else{
        document.getElementById('error12').innerHTML="";
        var element = document.getElementById("others");
        element.classList.add("border-green-500");
    }
}

