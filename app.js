let team = [
  "ClaireCullimore",
  "odealtry",
  "Karlsson2",
  "benjardine",
  "aggie-f",
  "karolinalangner",
  "DonghyunKK",
  "fcellanjones",
  "sasskia",
  "eadysr",
  "kurtmcdonald",
  "livzorn",
  "soellab",
  "AnnelieseGerrard",
  "alfiehiscox",
  "mroses33",
  "HarDhillon",
  "betharms",
  "SGrima1",
  "lloydy500"
  ];

const url = "https://kitt.lewagon.com/placeholder/users/";


const button = document.getElementById("pick");
button.addEventListener('click', () => {
  const random = team[Math.floor(Math.random()*team.length)];
  const randomURL = `${url}${random}`;
  deleteRandom(random);
  greyRandom(random);
  placeInCenter(random);
});


function deleteRandom(string) {
  team = team.filter(e => e !== string);
}

function greyRandom(string) {
  // console.log(string);
  const avatar = document.getElementById(string);
  avatar.style = "opacity: 0.2";
}

function placeInCenter(random) {
  const avatar = document.querySelector(".big-avatar");
  avatar.style = `background-image: url(${url}${random})`;
  console.log(avatar);
}
