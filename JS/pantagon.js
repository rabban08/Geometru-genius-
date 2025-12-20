function calculatePantagonArea(){
    const perimeter = getInputValueById("pantagonPerimeter");
    const apothem = getInputValueById("pantagonApothem")
    
    const area = 0.5 * perimeter * apothem;
    getInnerTextById("pantagonAreaResult",area)
}

function calculateEllipseArea(){
    const majorRadious = getInputValueById("ellipseMinar-radious");
    const minirRadious = getInputValueById("ellipseMinar-radious");
    const area = 3.1416 * majorRadious*minirRadious;
    
    getInnerTextById("ellipseAreaResult",area)
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function getInnerTextById(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText= area;
}