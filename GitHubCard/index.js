import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

let userName = "winterbloomingrose";

axios.get(www.api.github.com/users/winterbloomingrose);
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

// elements //
  const cardDiv = document.createElement('div');
  const userImg = document.createElement('img')
  const infoDiv = document.createElement('div')
  const nameHead = document.createElement('h3')

  // turn this into forEach create p array //
  let userInformation = [ 
    {"username": myProfiledata.username},
    {"location":  myProfiledata.location},
    {"profile": myProfiledata.html_url},
    {"followers": myProfiledata.followers},
    {"following": myProfiledata.following},
    {"bio": myProfiledata.bio},
  ]

  // appending //
  cardDiv.appendChild(userImg);
  cardDiv.appendChild(infoDiv);
  cardDiv.appendChild(nameHead);
  cardDiv.appendChild(username);

  function profileStats(array){
    array.forEach(element => {
      cardDiv.appendChild(element);
    });
   } 
  

// addingclasses //
  cardDiv.classList.add('card');
  infoDiv.classList.add('card-info');
  nameHead.classList.add('name');
  usernamePee.classList.add('username');

userImg.setAttribute('src',myProfiledata.avatar_url)

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
