
function triangleCalculate() {
    const triangleBaseInput = document.getElementById('triangleBase');
    const triangleHeightInput = document.getElementById('triangleHeight');

    const triangleBaseValue = triangleBaseInput.value;
    const triangleHeightValue = triangleHeightInput.value;

    const base = parseFloat(triangleBaseValue);
    const height = parseFloat(triangleHeightValue);
    const area = 0.5 * base * height;


    const triangleAreaResult = document.getElementById("triangleAreaResult");
    triangleAreaResult.innerText = area;
}



function rectangleCalculate() {
    const rectangleBaseInput = document.getElementById("rectangleBase");
    const rectangleHeightInput = document.getElementById("rectangleHeight");

    const rectangleBaseValue = rectangleBaseInput.value;
    const rectangleHeightValue = rectangleHeightInput.value;

    const base = parseFloat(rectangleBaseValue);
    const height = parseFloat(rectangleHeightValue);
    const area = base * height;

    const rectangleAreaResult = document.getElementById("rectangleAreaResult");
    rectangleAreaResult.innerText = area;

}



function parallelogramCalculator() {
    const paralleBaseInput = document.getElementById('paralleBase');
    const paralleHeightInput = document.getElementById('paralleHeight');

    const paralleBaseValue = paralleBaseInput.value;
    const paralleHeightValue = paralleHeightInput.value;

    const base = parseFloat(paralleBaseValue);
    const height = parseFloat(paralleHeightValue);
    const area = base * height;
    const paralleAreaResult = document.getElementById("paralleAreaResult");
    paralleAreaResult.innerText = area;

}



function rhombusCalculator (){
    const baseDiagonalInput = document.getElementById("baseDiagonal")
    const heightDiagonalInput = document.getElementById("heightDiagonal");

    const baseDiagonalValue = baseDiagonalInput.value;
    const heightDiagonalValue = heightDiagonalInput.value

    const base = parseFloat(baseDiagonalValue);
    const height = parseFloat(heightDiagonalValue);
    const area = 0.5 * base* height;

    const rhombusAreaResult = document.getElementById("rhombusAreaResult");
    rhombusAreaResult.innerText= area;
}