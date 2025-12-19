
function triangleCalculate(){
    const triangleBaseInput = document.getElementById('triangleBase');
    const triangleHeightInput = document.getElementById('triangleHeight');

    const triangleBaseValue = triangleBaseInput.value;
    const triangleHeightValue = triangleHeightInput.value;

    const base = parseFloat(triangleBaseValue);
    const height = parseFloat(triangleHeightValue);
    const area = 0.5 * base * height;
    

    const triangleAreaResult = document.getElementById("triangleAreaResult");
    triangleAreaResult.innerText=area;
}



function rectangleCalculate(){
    const rectangleBaseInput = document.getElementById("rectangleBase");
    const rectangleHeightInput = document.getElementById("rectangleHeight");

    const rectangleBaseValue = rectangleBaseInput.value;
    const rectangleHeightValue = rectangleHeightInput.value;

    const base = parseFloat(rectangleBaseValue);
    const height = parseFloat(rectangleHeightValue);
    const area = base* height;

    const rectangleAreaResult = document.getElementById("rectangleAreaResult");
    rectangleAreaResult.innerText = area;

}