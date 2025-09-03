const info = document.querySelector(".info");

const bouton = document.querySelectorAll('input[type="button"]');

function val(resultat) {
  form.fenetre.value = form.fenetre.value + resultat;
}

function calcule() {
  if (form.fenetre.value == "") {
    info.innerText = "Veuillez entrer un chiffre";
    bouton.forEach((btn) => {
      btn.addEventListener("click", () => {
        info.innerText = "";
      });
    });
  } else {
    form.fenetre.value = eval(form.fenetre.value);
  }
}

function suppr() {
  form.fenetre.value = "";
}