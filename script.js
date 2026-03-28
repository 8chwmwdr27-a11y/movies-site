function getUser(){
  return JSON.parse(localStorage.getItem("user"));
}

function register(){
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  localStorage.setItem("user", JSON.stringify({username,email}));
  location.reload();
}

function openPopup(){
  document.getElementById("registerPopup").style.display="flex";
}

function closePopup(){
  document.getElementById("registerPopup").style.display="none";
}

function showPrivacy(){
  document.getElementById("privacyBox").style.display="block";
}

// ניגון
function play(url){
  if(!getUser()){
    openPopup();
    return;
  }

  document.getElementById("player").src = url;
}

// 📺 עונות + פרקים
const seasonsData = [
  {
    name:"עונה 1",
    img:"tzafuf1.png",
    episodes:[
      "https://drive.google.com/file/d/1MoAzl5BX5Se80XOeypPoZhjgLIROjcxC/preview",
      "https://drive.google.com/file/d/1isZiALgbbQWagGzt4GxysVq1_Qfd4tvI/preview",
      "https://drive.google.com/file/d/1tJM6qYOmII0v6ehMcXojDRCixkNBqI2H/preview"
    ]
  },
  {
    name:"עונה 2",
    img:"tzafuf2.png",
    episodes:[
      "https://drive.google.com/file/d/1Y9b9ZmuRq_svh0pE-5uNUTHOFpol4EHX/preview",
      "https://drive.google.com/file/d/10CaRHCjgBMmmwnqmpRFtQsB5Bvq5uzd8/preview"
    ]
  }
];

// הצגת עונות
const seasonsDiv = document.getElementById("seasons");

seasonsData.forEach((season,index)=>{
  const div = document.createElement("div");
  div.className="card";

  div.innerHTML = `
    <img src="${season.img}">
    <p>${season.name}</p>
  `;

  div.onclick = ()=>openSeason(index);

  seasonsDiv.appendChild(div);
});

// פתיחת עונה
function openSeason(index){
  document.getElementById("episodesSection").style.display="block";
  document.getElementById("seasonTitle").innerText = seasonsData[index].name;

  const episodesDiv = document.getElementById("episodes");
  episodesDiv.innerHTML="";

  seasonsData[index].episodes.forEach((ep,i)=>{
    const div = document.createElement("div");
    div.className="card";

    div.innerHTML = `
      <img src="${seasonsData[index].img}">
      <p>פרק ${i+1}</p>
      <button onclick="addFav('פרק ${i+1}')">❤️</button>
    `;

    div.onclick = ()=>play(ep);

    episodesDiv.appendChild(div);
  });
}

// חזרה
function closeEpisodes(){
  document.getElementById("episodesSection").style.display="none";
}

// סרטים
const moviesDiv = document.getElementById("movies");

const movies = [
  {
    name:"זוטרופוליס 1",
    url:"https://drive.google.com/file/d/14_z-C_3QL3rlmxP_JI8H4Ew_tj8M0FjQ/preview",
    img:"zootopia1.png"
  },
  {
    name:"זוטרופוליס 2",
    url:"https://drive.google.com/file/d/1HrTPtCnqi9PPmlbMZ6Zl7dLO_Qs4dUMq/preview",
    img:"zootopia2.png"
  }
];

movies.forEach(m=>{
  const div = document.createElement("div");
  div.className="card";

  div.innerHTML = `
    <img src="${m.img}">
    <p>${m.name}</p>
    <button onclick="addFav('${m.name}')">❤️</button>
  `;

  div.onclick = ()=>play(m.url);

  moviesDiv.appendChild(div);
});

// אהובים
function addFav(name){
  let fav = JSON.parse(localStorage.getItem("fav")) || [];
  fav.push(name);
  localStorage.setItem("fav", JSON.stringify(fav));
  alert("נוסף לאהובים ❤️");
}

// משתמש
const userArea = document.getElementById("userArea");
const user = getUser();

if(user){
  userArea.innerHTML = `ברוך הבא ${user.username}`;
}else{
  userArea.innerHTML = `<button onclick="openPopup()">התחבר</button>`;
}
