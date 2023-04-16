
function goHome(){

  transition("home","background");
    


}
 


function transition(showedID,hiddenID){
  const x =  document.getElementById(showedID);
  const y =  document.getElementById(hiddenID);
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
    
    transition("background","home");
    
}