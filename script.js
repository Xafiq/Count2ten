
window.onload = function(){
    
    var number=1;
    setInterval(function(){
        document.querySelector("#d1").innerHTML = number%10;
        document.querySelector("#d10").innerHTML = Math.floor(number/10)%10;
        document.querySelector("#d100").innerHTML = Math.floor(number/100)%10;
        document.querySelector("#d1000").innerHTML = Math.floor(number/1000)%10;
        document.querySelector("#d10000").innerHTML = Math.floor(number/10000)%10;
        document.querySelector("#d100000").innerHTML = Math.floor(number/100000)%10;
        number++;
    }, 1000);
}