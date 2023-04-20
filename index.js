

const home = document.getElementById("home");
const book = document.getElementById("books");
const background = document.getElementById("background");
const contact = document.getElementById("contact");

const elementList = [home,book, background,contact];
function goHome(){

  transition("home");
    


}
 


function transition(showedID){
  let x =  document.getElementById(showedID);
  let y;
  for(let i = 0; i < elementList.length;i++ ){

    if (!elementList[i].classList.contains("visuallyhidden")) { y = elementList[i];}



  }

  
  
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
    transition("background");
}

function goBooks() {
transition("books");
}

function goContacts() {
  transition("contact");
  }


function goMovies(){
  transition("movies");


}