"use strict";
const compteur = document.querySelector('#compteur'); // si on rajoute le ! on dit que compteur ne peut pas être null
let i = 0;
const increment = (e) => {
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
