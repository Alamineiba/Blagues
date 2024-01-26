
let tab = [
"La patience est la clé du bonheur.",
"La sagesse est une montagne, on peut la gravir mais jamais l'atteindre.",
"Les paroles justes sont comme un bon remède ",
"Si tu es patient dans un moment de colère, tu échapperas à 100jours de chagrin",
"La gentilesse est comme un jardin : elle embellit l'âme"
]

const btn = document.querySelector(".btn");
const reponse = document.querySelector(".reponse");
btn.addEventListener("click", () => {
    const random = (Math.floor(Math.random() * tab.length));

    reponse.innerHTML = tab[random];

})

