function compute()
{
    let p = document.getElementById("principal").value;
    let r = document.getElementById("rate").value;
    let y = document.getElementById("years").value;
    let i = document.getElementById("Interest").value;
    if(check(p,r,y)){

    }
}
function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value;
}  
function check(p,r,y){
    if(p==""||r==""||y==""){
        alert("Value must not be empty \n Enter the value");
        return false;
    }else{
        return true;
    }
}      