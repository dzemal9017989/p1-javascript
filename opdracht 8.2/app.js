function multiply(){
    var getal1 = parseFloat(document.getElementById("getal1").value);
    var getal2 = parseFloat(document.getElementById("getal2").value);

    if((getal1 == 0) || (getal2 == 0)){
    document.getElementById("answer").innerHTML="het getal is te laag!";
    }
    else {
    var result = getal1*getal2;
    }
    if(!isNaN(result))
    {

        document.getElementById("answer").innerHTML="Antwoord is "+result;

    }
}

    function minus(){
    var getal1 = parseFloat(document.getElementById("getal1").value);
    var getal2 = parseFloat(document.getElementById("getal2").value);

    if((getal1 == 0) || (getal2 == 0)){
    document.getElementById("answer").innerHTML="het getal is te laag!";
    }
    else {
    var result = getal1*getal2;
    }
    if(!isNaN(result))
    {

        document.getElementById("answer").innerHTML="Antwoord is "+result;

    }
}

    function add(){
    var getal1 = parseFloat(document.getElementById("getal1").value);
    var getal2 = parseFloat(document.getElementById("getal2").value);

    if((getal1 == 0) || (getal2 == 0)){
    document.getElementById("answer").innerHTML="het getal is te laag!";
    }
    else {
    var result = getal1*getal2;
    }
    if(!isNaN(result))
    {

        document.getElementById("answer").innerHTML="Antwoord is "+result;

    }
}

    function devide(){
    var getal1 = parseFloat(document.getElementById("getal1").value);
    var getal2 = parseFloat(document.getElementById("getal2").value);

    if((getal1 == 0) || (getal2 == 0)){
    document.getElementById("answer").innerHTML="het getal is te laag!";
    }
    else {
    var result = getal1*getal2;
    }
    if(!isNaN(result))
    {

        document.getElementById("answer").innerHTML="Antwoord is "+result;

    }
}
