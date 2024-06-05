function displayDate(){
    const element = document.getElementById("date");
    element.innerHTML=new Date()
}
//function sayGreetings goes here!!!
const d = new Date()

const h  = d.getHours()
const m = d.getMinutes()
const s = d.getSeconds()

document.getElementById("hour").innerHTML = h;
document.getElementById("minute").innerHTML = m;
document.getElementById("second").innerHTML = s;

function sayGreetings(){
    if(0<h<12){
        document.getElementById("greetings").innerHTML="Good morning"
    }
    else if(12<h<16){
        document.getElementById("greetings").innerHTML="Good afternoon"
    
    }
    else{
        document.getElementById("greetings").innerHTML="Good evening"
    
    }
    }
////function sayGreetings ends here!!!

function push(){
    document.getElementById('para').innerHTML="Changed Successfully"
}