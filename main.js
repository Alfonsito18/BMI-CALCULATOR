let submit = document.getElementById('submit');
let image = document.getElementById('image');
let reload = document.getElementById('clear');


function calculate(){
    let weight = document.querySelector('#weight').value;
    let height = document.querySelector('#height').value;
    let status =  document.querySelector('.status');
    let bmi = (weight/(height*height));
    console.log(bmi);
    if(bmi <= 18){
    document.querySelector('.status').innerHTML = `Your BMI is ${bmi.toFixed(2)} UnderWeight`
    status.style.display = "block"
    image.src = 'img/underweight.jpg'
    image.style.display = "block"
    }else if(bmi >=18.5 && bmi <=24.9){
    document.querySelector('.status').innerHTML = `Your BMI is ${bmi.toFixed(2)} Normal`
    status.style.display = "block"
    image.src = 'img/normalweight.jpg'
    image.style.display = "block"
    }else if(bmi>=25 && bmi<=29.9){
    document.querySelector('.status').innerHTML = `Your BMI is ${bmi.toFixed(2)} OverWeight`
    status.style.display = "block"
    image.src = 'img/overweight.jpg'
    image.style.display = "block"    
    }else{
    document.querySelector('.status').innerHTML = `Your BMI is ${bmi.toFixed(2)} Obese`
    status.style.display = "block"
    image.src = 'img/obesity.jpg'
    image.style.display = "block"   
    }
}
submit.addEventListener('click',calculate);

function reloadPage(){
    window.location.reload()
}
reload.addEventListener('click',reloadPage)


/*
function checkInput(){
    const w = document.getElementById('weight').value;
    const h = document.getElementById('height').value;
    var regex = /^[0-9]+$/;

    if(!w.match(regex)){
        alert("Input numbers only");
        return false;
    }else if(!w.match(regex)){
        alert("Input numbers only");
        return false;
    }
}
w.addEventListener('input',checkInput);
h.addEventListener('input',checkInput);
*/