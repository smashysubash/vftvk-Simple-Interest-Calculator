function compute()
{
    var p = document.getElementById("principal").value;
    var y = document.getElementById("years").value;
    var i = document.getElementById("Interest").value;
    var year = new Date().getFullYear() + parseInt(y);
    if(check(p,y)){
        var amount=(p*y*i)/100;
        document.getElementById("result").innerHTML="If you deposit <mark>  "+p+"</mark> <br> at an interest rate of <mark>  "+i+"</mark> <br> you will recieve an amount of<mark>  "+amount+"</mark> <br> in the year<mark>  "+year+"</mark";
    }
}
function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value;
}  
function check(p,y){
    if(p==""||y==""){
        alert("Value must not be empty \nEnter the value");
        return false;
    }else if(p<0||y<0){
        alert("Value must not be negative \nEnter positive value");
    }else{
        return true;
    }
}      