const movies = [
  { name:"זוטרופוליס 1", url:"https://drive.google.com/file/d/14_z-C_3QL3rlmxP_JI8H4Ew_tj8M0FjQ/preview", img:"images/zootopia1.png" },
  { name:"זוטרופוליס 2", url:"https://drive.google.com/file/d/1HrTPtCnqi9PPmlbMZ6Zl7dLO_Qs4dUMq/preview", img:"images/zootopia2.png" }
];

const seasonsData = [
  { name:"עונה 1", img:"images/tzafuf1.png", episodes:[
    "https://drive.google.com/file/d/1MoAzl5BX5Se80XOeypPoZhjgLIROjcxC/preview",
    "https://drive.google.com/file/d/1isZiALgbbQWagGzt4GxysVq1_Qfd4tvI/preview",
    "https://drive.google.com/file/d/1tJM6qYOmII0v6ehMcXojDRCixkNBqI2H/preview",
    "https://drive.google.com/file/d/1tJM6qYOmII0v6ehMcXojDRCixkNBqI2H/preview",
    "https://drive.google.com/file/d/1cWYhfwCoo5pJgzUFrpQiTvYMYEbg1ZUc/preview",
    "https://drive.google.com/file/d/1zRH9OKhSk87WZMVtdusb_z0ntZt110_7/preview",
    "https://drive.google.com/file/d/1Ymx5zil-aBBNH77yEhVwHhUaantmcA8h/preview",
    "https://drive.google.com/file/d/1KT6dDH3k9Ye13pKxarqztlTd0JYZfWSX/preview",
    "https://drive.google.com/file/d/1Qe99zYh0Nn6-9qPb3bgSdLmOn1_x7Wn8/preview",
    "https://drive.google.com/file/d/1bclh23QFusb0tUPQWed6eqI6rfRA29aq/preview",
    "https://drive.google.com/file/d/12U8BtVpzx7UiknGLrEl_FgFvfwr1mqi9/preview",
    "https://drive.google.com/file/d/1EhB5t03clS4bF0-RfTVcf2A0Ahvfa3VF/preview",
    "https://drive.google.com/file/d/1iABzmI3QAdVBFC-IvexCMQY20xmCq5GA/preview",
    "https://drive.google.com/file/d/1ER_utCWpc6TfbxK40cggW31THF8MhSpt/preview",
    "https://drive.google.com/file/d/1Ttk3UL1kFXNzYJUpD61NURCMTIJtuae3/preview",
    "https://drive.google.com/file/d/1X71gUsBhJtezYlJknMKHnz8x3hUdi2Vj/preview",
    "https://drive.google.com/file/d/1X71gUsBhJtezYlJknMKHnz8x3hUdi2Vj/preview",
    "https://drive.google.com/file/d/1HO42GsUOwp6R4sz6rbDdmhe219GoCGso/preview",
    "https://drive.google.com/file/d/1Fbu4IYyLZ5mSRQPSt6zgt0um4ra0Ng_h/preview",
    "https://drive.google.com/file/d/1Kq-J5fBAM9KlYnf1_nK0zA-VL3kZkrj6/preview"
  ]},
  { name:"עונה 2", img:"images/tzafuf2.png", episodes:[
    "https://drive.google.com/file/d/1Y9b9ZmuRq_svh0pE-5uNUTHOFpol4EHX/preview",
    "https://drive.google.com/file/d/10CaRHCjgBMmmwnqmpRFtQsB5Bvq5uzd8/preview",
    "https://drive.google.com/file/d/1pYvMHMWfmIApzEiRrnMXatKulR5YMguL/preview",
    "https://drive.google.com/file/d/1LNvzpkGh6GJNltQFatr8l3NAuQskd1LJ/preview",
    "https://drive.google.com/file/d/1P_SoisLtg4klG4lTwAZxwLV1usOFdp6r/preview",
    "https://drive.google.com/file/d/1YO2M-0eoX-po-Hq2l91hsydznxW_RwiJ/preview",
    "https://drive.google.com/file/d/1xIkYXC5TIAyxv6rLaMpS3db8tnDotGx5/preview",
    "https://drive.google.com/file/d/1xZZzS7M9Vaq3hrc025-7WjfwGZMpIAEL/preview",
    "https://drive.google.com/file/d/1sAZz0BLoSn_9yPHOzdK1KVAQyzXnQS2Q/preview",
    "https://drive.google.com/file/d/1Gh6KC_wALojUh2iUeRa49jdh9iI4fhNL/preview",
    "https://drive.google.com/file/d/1Jmxzxajk4zQtPlw1zNcJd_soRWK1YUUe/preview",
    "https://drive.google.com/file/d/1qhS6LirpUorwLvWhouwuQbplIcHED6aB/preview",
    "https://drive.google.com/file/d/1FduDIXPKViwsGVZ1sJ0fZO9rO13vuHHO/preview",
    "https://drive.google.com/file/d/13PmLiTb_5Ki2mtK5pApJ1VdjdQ0xlfx5/preview",
    "https://drive.google.com/file/d/1ZWy2CGP1iqQZziA0oTcorPgMOcE-nm2m/preview",
    "https://drive.google.com/file/d/1CWluOSC8npxcM_oAYZ_Il1j5GEgLpxjM/preview",
    "https://drive.google.com/file/d/1rtH4V6JWO2a2Z2TT6pSViukVvtkcF8rk/preview",
    "https://drive.google.com/file/d/1xvE6y7_6vZ2URphkZqL9EnI517m3u2Eh/preview",
    "https://drive.google.com/file/d/1BLy0phn0KLYv_Z2q0rdZ7wcYhnGJrcO6/preview",
    "https://drive.google.com/file/d/1_2Kg53EuCQV57yyPvrqrdzYjGsfvEO5S/preview"
  ]}
];

// נגן
function play(url){
  if(!getUser()){ openPopup(); return; }
  const player = document.getElementById("player");
  const container = document.getElementById("playerContainer");
  player.src = url;
  container.classList.add("active");
  addToRecent(url);
  container.scrollIntoView({behavior:"smooth"});
}
function closePlayer(){ 
  document.getElementById("playerContainer").classList.remove("active"); 
  document.getElementById("player").src=""; 
}

// אהובים וצפיות אחרונות
function addToFavorites(item){
  let fav = JSON.parse(localStorage.getItem("fav"))||[];
  fav.push(item);
  localStorage.setItem("fav", JSON.stringify(fav));
}
function addToRecent(item){
  let recent = JSON.parse(localStorage.getItem("recent"))||[];
  recent.unshift(item);
  localStorage.setItem("recent", JSON.stringify(recent));
}

// משתמש
function getUser(){ return localStorage.getItem("user"); }
function openPopup(){ document.getElementById("registerPopup").classList.remove("hidden"); }
function registerUser(){
  const name=document.getElementById("username").value;
  const email=document.getElementById("email").value;
  const newsletter=document.getElementById("newsletter").checked;
  if(name){
    localStorage.setItem("user", name);
    localStorage.setItem("email", email);
    localStorage.setItem("newsletter", newsletter);
    document.getElementById("registerPopup").classList.add("hidden");
    document.getElementById("userInfo").innerText=`ברוכים הבאים ${name} 👋`;
    document.getElementById("appContainer").classList.remove("hidden");
  }
}

// הצגת סרטים וסדרות
function renderMovies(){
  const moviesDiv=document.getElementById("movies");
  movies.forEach(m=>{
    const div=document.createElement("div");
    div.className="card";
    div.innerHTML=`<img src="${m.img}"><div class="overlay"><p>${m.name}</p><button class="playBtn">▶ נגן</button><button class="favBtn">❤️</button></div>`;
    div.querySelector(".playBtn").onclick=e=>{ e.stopPropagation(); play(m.url); };
    div.querySelector(".favBtn").onclick=e=>{ e.stopPropagation(); addToFavorites(m.name); };
    moviesDiv.appendChild(div);
  });
}
function renderSeasons(){
  const seasonsDiv=document.getElementById("seasons");
  seasonsData.forEach(s=>{
    const div=document.createElement("div");
    div.className="card";
    div.innerHTML=`<img src="${s.img}"><div class="overlay"><p>${s.name}</p><button class="playBtn">צפה בעונה</button></div>`;
    div.querySelector(".playBtn").onclick=e=>{ e.stopPropagation(); showEpisodes(s); };
    seasonsDiv.appendChild(div);
  });
}
function showEpisodes(season){
  const container=document.getElementById("seasons");
  container.innerHTML="";
  season.episodes.forEach((ep,i)=>{
    const div=document.createElement("div");
    div.className="card";
    div.innerHTML=`<img src="${season.img}"><div class="overlay"><p>פרק ${i+1}</p><button class="playBtn">▶ נגן</button></div>`;
    div.querySelector(".playBtn").onclick=()=>play(ep);
    container.appendChild(div);
  });
}

// הפעלה עם מסך פרסומת
window.onload=()=>{
  setTimeout(()=>{
    document.getElementById("adScreen").classList.add("hidden");
    document.getElementById("appContainer").classList.remove("hidden");
    renderMovies();
    renderSeasons();
  },3000);
};
