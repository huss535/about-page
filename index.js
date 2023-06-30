const lambdaFunctionUrl = "https://gyzcy3qfpu5tbezlrudezks72a0exfki.lambda-url.us-east-1.on.aws/";

const home = document.getElementById("home");
const book = document.getElementById("books");
const movies = document.getElementById("movies");
const background = document.getElementById("background");
const contact = document.getElementById("contact");
const music = document.getElementById("Music");
const skills = document.getElementById("skills");
const characterHeader = document.getElementById("characterDisplay");
const loadingIndicator = document.getElementById('loadingIndicator');
const applePlaylist = '<iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/nz/playlist/mix-1/pl.u-DdAN8ENI0zGW11Y"></iframe>';
const elementList = [home, book, movies, background, contact, music,skills];


const cookieOptions = {
  // Set SameSite attribute to "Strict" for same-site requests only
  sameSite: 'None',
  // Add any other desired options or attributes
  // For example, to make the cookie secure, add the "secure" option
  secure: true
};




function setCookieWithSameSite() {
  document.cookie = `appleMusicCookie=appleMusicValue; ${Object.entries(cookieOptions).map(([key, value]) => `${key}=${value}`).join('; ')}`;
}

function goHome() {
  transition("home");
}

function transition(showedID) {
  let x = document.getElementById(showedID);
  let y;
  for (let i = 0; i < elementList.length; i++) {
    if (!elementList[i].classList.contains("visuallyhidden")) {
      y = elementList[i];
    }
  }

  y.classList.add("visuallyhidden");
  if(y == music){

    setTimeout(() => {
    
      y.classList.add("hidden");
      y.style.pointerEvents  = "none";
    }, 1000);


  }
  else{setTimeout(() => {
    
    y.classList.add("hidden");
  }, 1000);}
  
  if(x == music){


    x.style.pointerEvents  = "auto";

  }

  setTimeout(function () {
    x.classList.remove("hidden");
  }, 1000);
  setTimeout(function () {
    x.classList.remove("visuallyhidden");
  }, 1000 + 50);
}

function goBackground() {
  transition("background");
}

function goBooks() {
  transition("books");
}

function goContacts() {
  transition("contact");
}

function goMovies() {
  transition("movies");
  
}

function goMusic() {
  transition("Music");
 
}

function goSKills(){
  transition("skills");
}

function giveRandomCharacter() {
  loadingIndicator.style.display = 'block';

  fetch(lambdaFunctionUrl, {
    mode: 'no-cors',
    headers: {'Access-Control-Allow-Origin': '*'}
    
  }).then(response => response).then(data => {
    // Process the response data from the Lambda function
    loadingIndicator.style.display = 'none';
    console.log(data);
    characterHeader.innerHTML = data;
    // Continue with any further processing or rendering of the data on your website
  })
  .catch(error => {
    // Handle any errors that occur during the request
    loadingIndicator.style.display = 'none';
    console.log(error);
    characterHeader.innerHTML = "Sorry, something is definitely off here.";
  });
}



