function getValueById(id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function getInnerTextById(id){
    const innerText = document.getElementById(id).innerText;
    const convertedText = parseFloat(innerText);
    return convertedText;
}

function setInnerTextByIdAndValue(id, value){
    document.getElementById(id).innerText = value;
}

function handleToggle(id, status){
    document.getElementById(id).style.display = status;
}