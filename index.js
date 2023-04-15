
function goHome(){


    const x =  document.getElementById("home");
    const y =  document.getElementById("background");
    y.classList.add('visuallyhidden');
    setTimeout(() => {  y.classList.add('hidden') }, 1000);
    
    setTimeout(function () {
        x.classList.remove('hidden');
      }, 1000);
    setTimeout(function () {
          x.classList.remove('visuallyhidden');
        }, 1000 +50);
      



}
 








function goBackground(){
    const x =  document.getElementById("home");
    const y =  document.getElementById("background");
    x.classList.add('visuallyhidden');
    setTimeout(() => {  x.classList.add('hidden') }, 1000);

    
        y.classList.remove('hidden');
        setTimeout(function () {
          y.classList.remove('visuallyhidden');
        }, 1000);
      

}