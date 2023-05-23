function myfunction()
{
    let a= document.getElementById("numb").value;
    let b;
    if(isNaN(a) || a<15 || a>200){
        b="Input is not vaild (Range)";
    }else{
        b= "Your daily "+ a *35 +" ml(Milliliter) need to drink water.";
    }
    document.getElementById("output").innerHTML=b;
}

function clear(){
    document.getElementById("myForm").reset();
}
