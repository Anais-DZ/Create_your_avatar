const arrow_left = document.getElementById("arrow_left"); // On récupère l'image de la fleche gauche de l'html

const arrow_right = document.getElementById("arrow_right"); // On récupère l'image de la fleche droite de l'html

const image = document.getElementById("hair_1"); // On récupère l'image de la premiere coupe de l'html


let color = "black"; // Définit la couleur par défaut. Ne pas déclarer avec "const" car une constante ne peut pas être modifiée et ici, on la modifie avec une incrémentation.

let num = 1; // Définit la coupe de cheveux par défaut. Ne pas déclarer avec "const" car une constante ne peut pas être modifiée et ici, on la modifie avec une incrémentation.

arrow_left.style.opacity = "0.5";
arrow_left.style.cursor = "not-allowed";
 // On initialise la flèche gauche. Elle est "désactivée" dès l'arrivée sur la page avec un sens interdit comme curseur et une oppacité de moitié.



arrow_right.addEventListener("click", function () {   
    if (num < 3) {
        num++;
        image.setAttribute ("src", `img/hair-${color}-${num}.png`); // = "img/hair-black-1.png" par exemple
        arrow_left.style.opacity = "1";
        arrow_left.style.cursor = "pointer" // Le curseur affiche la main
    }
    if (num == 3) {
        arrow_right.style.opacity = "0.5";
        arrow_right.style.cursor = "not-allowed";
    }
});

arrow_left.addEventListener("click", function () {   
    if (num > 1) {
        num--;
        image.setAttribute ("src", `img/hair-${color}-${num}.png`);
        arrow_right.style.opacity = "1";
        arrow_right.style.cursor = "pointer";
    }
    if (num == 1) {
        arrow_left.style.opacity = "0.5";
        arrow_left.style.cursor = "not-allowed";
    }
});


const div_color = document.querySelectorAll(".color"); // On récupère toutes les classe "color" de l'html.

const colors = ["black", "blond", "turquoise"]; // On crée un tableau avec les couleurs.

//Deux possibilités :

// Ecrire 3 fois la fonction

// div_color[0].addEventListener("click", function () {
//     color= "black";
//     image.setAttribute ("src", `img/hair-${color}-${num}.png`);
// });

// div_color[1].addEventListener("click", function () {
//     color= "blond";
//     image.setAttribute ("src", `img/hair-${color}-${num}.png`);
// });

// div_color[2].addEventListener("click", function () {
//     color= "turquoise";
//     image.setAttribute ("src", `img/hair-${color}-${num}.png`);
// });


// ou avec un tableau et un "for...let"

for (let i = 0; i < div_color.length; i++) {
    div_color[i].addEventListener("click", function () {
        color = colors[i];
        image.setAttribute("src", `img/hair-${color}-${num}.png`);
    });
}