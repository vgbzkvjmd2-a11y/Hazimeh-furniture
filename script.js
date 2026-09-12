const bedroomProducts = [
  ["assets/bedroom-1.jpg","Bedroom Set – Oak Wood","Complete bedroom collection"],
  ["assets/bedroom-2.jpg","Bedroom Set – Modern Wood","Bed, wardrobe & dresser"],
  ["assets/bedroom-3.jpg","Bedroom Set – Sea View","Complete bedroom collection"],
  ["assets/bedroom-4.jpg","Wardrobe & Dressing Table","Matching bedroom storage"],
  ["assets/bedroom-5.jpg","Bedroom Set – Classic","Bed, nightstands & wardrobe"]
];

const sofaProducts = [
  ["assets/sofa-1.jpg","Corner Sofa – Modern Comfort","Large sectional seating"],
  ["assets/sofa-2.jpg","Living Room Set","Sofa set with armchairs"],
  ["assets/sofa-3.jpg","Modern Sectional Sofa Set","Contemporary seating"],
  ["assets/sofa-4.jpg","3-Seater Sofa – Brown","Channel-tufted sofa"],
  ["assets/sofa-5.jpg","3-Seater Sofa – Beige","Channel-tufted sofa"],
  ["assets/sofa-6.jpg","3-Seater Sofa – Cream","Channel-tufted sofa"],
  ["assets/sofa-7.jpg","3-Seater Sofa – Grey","Channel-tufted sofa"],
  ["assets/sofa-8.jpg","3-Seater Sofa – Red","Bold statement sofa"],
  ["assets/sofa-9.jpg","Sofa Collection – Grey","Modern seating"]
];

function card(p){
  return `<article class="card" data-name="${p[1].toLowerCase()}">
    <img src="${p[0]}" alt="${p[1]}" loading="lazy">
    <div class="card-body">
      <div class="card-title">${p[1]}</div>
      <div class="card-sub">${p[2]}</div>
      <div class="card-row"><span></span><button class="details" onclick="addToCart('${p[1].replace(/'/g,"\\'")}')">View Details →</button></div>
    </div>
  </article>`;
}
function mini(p){return `<article class="mini-card"><img src="${p[0]}" alt="${p[1]}" loading="lazy"><h3>${p[1]}</h3></article>`}

document.getElementById("bedroomGrid").innerHTML = bedroomProducts.map(card).join("");
document.getElementById("sofaGrid").innerHTML = sofaProducts.map(card).join("");
document.getElementById("newGrid").innerHTML = [
  sofaProducts[0], sofaProducts[3], bedroomProducts[0], sofaProducts[6]
].map(mini).join("");

let cart = 0;
function addToCart(name){
  cart++;
  document.getElementById("cartCount").textContent = cart;
  alert(name + " added to your inquiry list.");
}

document.getElementById("searchInput").addEventListener("input", e => {
  const q = e.target.value.toLowerCase().trim();
  document.querySelectorAll(".card").forEach(c => {
    c.style.display = (!q || c.dataset.name.includes(q)) ? "" : "none";
  });
});

const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll(".nav a")];
window.addEventListener("scroll", () => {
  let current = "home";
  for(const s of sections) if(scrollY >= s.offsetTop - 130) current = s.id;
  links.forEach(a => a.classList.toggle("active", a.getAttribute("href")==="#"+current));
});
