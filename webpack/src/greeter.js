import  request from './utils/request'
 
 export default function() {
    var greet = document.createElement('button');
    greet.textContent = "Hi I'm coming!";
    greet.onclick =()=>request();
    // greet.addEventListener('click',function(){console.log("hhhhh")})
    return greet;
  };