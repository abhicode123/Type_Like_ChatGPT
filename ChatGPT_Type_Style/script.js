let inputEle = document.getElementById("input-txt");
let button = document.getElementById("submit-btn");
let typeEle = document.getElementById("type-para");

button.addEventListener("click",()=>{
    typeEle.innerHTML = "";
    let inputData = inputEle.value;
    let index = 0;
    let intervalId = setInterval(()=>{
        if(index >= inputData.length){
            clearInterval(intervalId);
        }
        let letter = inputData.charAt(index);
        typeEle.innerHTML += letter;
        index += 1;
    },50)
})