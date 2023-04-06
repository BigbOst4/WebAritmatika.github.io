function area_triagle(){
    // Get the value of the input fields
    const num1 = parseFloat(document.getElementById("alasT").value);
    const num2 = parseFloat(document.getElementById("highT").value);
    // Perform calculation
    const result_area_triagle = 0.5 * num1 * num2;
    // Display result in HTML element
    document.getElementById("show-area-triagle").textContent = result_area_triagle;
    return false;
}
function resettriagle(){
    document.getElementById("areatriagle").reset();
}

function around_triagle(){
    // Get the value of the input fields
    const num1 = parseFloat(document.getElementById("sideA").value);
    const num2 = parseFloat(document.getElementById("sideB").value);
    const num3 = parseFloat(document.getElementById("sideC").value);
    // Perform calculation
    const result_around_triagle = num1 + num2 + num3;
    // Display result in HTML element
    document.getElementById("show-around-triagle").textContent = result_around_triagle;
;
return false;
;
}
function resetaroundtriagle(){
    document.getElementById("aroundtriagle").reset();
}

function area_parallelogram(){
    // Get the value of the input fields
    const num1 = parseFloat(document.getElementById("alas-parallelogram").value);
    const num2 = parseFloat(document.getElementById("high-parallelogram").value);
    // Perform calculation
    const result_area_parallelogram = num1 * num2;
    // Display result in HTML element
    document.getElementById("show-area-parallelogram").textContent = result_area_parallelogram;
;
return false;
;
}
function resetparallelogram(){
    document.getElementById("areaparallelogram").reset();
}
function around_parallelogram(){
    // Get the value of the input fields
    const num1 = parseFloat(document.getElementById("sideAP").value);
    const num2 = parseFloat(document.getElementById("sideBP").value);
    // Perform calculation
    const result_around_parallelogram = 2 * (num1 + num2);
    // Display result in HTML element
    document.getElementById("show-around-parallelogram").textContent = result_around_parallelogram;
;
return false;
;
}
function resetaroundparallelogram(){
    document.getElementById("aroundparallelogram").reset();
}