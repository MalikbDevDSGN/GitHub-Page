const searchInput = document.querySelector("input");
const searchButton = document.querySelector('.search_button');

let profileName = document.querySelector('#profileName');
let joinDate = document.querySelector('#joinDate');
let bioSection = document.querySelector('#bio-section');
let gitRepos = document.querySelector('#repos');
let gitFollowers = document.querySelector('#followers');
let gitFollowing = document.querySelector('#following');
let gitLocation = document.querySelector('#location');
let gitTwitter = document.querySelector('#twitter');
let githubUrl = document.querySelector('#githubUrl');
let githubAvatar = document.querySelector('#avatar.img');

const toggleThemeButton = document.querySelector("#toggle-theme")

toggleThemeButton.addEventListener("click", () =>{

  document.body.classList.toggle("dark");

});

let searchInputValue = '';

searchInput.addEventListener('input', (e) =>{
  searchInputValue = e.target.value;
})

 const updateUserData = (data) => {
  console.log(data);
  profileName.textContent = data.login;
  joinDate.textContent = data.created_at;
  bioSection.textContent = data.bio; 
  gitRepos.textContent = data.public_repos;
  gitFollowers.textContent = data.followers;
  gitFollowing.textContent = data.following;
  gitLocation.textContent = data.location;
  gitTwitter.textContent = data.twitter_username;
  githubUrl.textContent = data.html_url;
  githubAvatar = data.avatar_url;


 };

const getUserData = (userName) => {
  fetch(`https://api.github.com/users/${userName}`)
  .then((response) => response.json())
  .then((data) => updateUserData(data));
};

searchButton.addEventListener('click', () => getUserData(searchInputValue));

//   abhishekjakhar