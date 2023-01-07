function multiply(){
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    
    var result = parseFloat(getal1)*parseFloat(getal2);

    if(!isNaN(result))
    {
        document.getElementById("answer").innerHTML="Antwoord is "+result;
    }
}
function minus(){
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    
    var result = parseFloat(getal1)-parseFloat(getal2);

    if(!isNaN(result))
    {
        document.getElementById("answer").innerHTML="Antwoord is "+result;
    }
}

function add(){
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    
    var result = parseFloat(getal1)+parseFloat(getal2);

    if(!isNaN(result))
    {
        document.getElementById("answer").innerHTML="Antwoord is "+result;
    }
}

function devide(){
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    
    var result = parseFloat(getal1)/parseFloat(getal2);

    if(!isNaN(result))
    {
        document.getElementById("answer").innerHTML="Antwoord is "+result;
    }
}