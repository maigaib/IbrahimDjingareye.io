/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
/*=================================== titres ========================================================== */
// const typed = new Typed(".multiple-text", {
//     strings: ["Développeur Web et Mobile", "Designer Web", "Administrateur Systèmes et <br> Réseaux", "Concepteur de base de <br> données"],
//     typeSpeed: 100,
//     backSpeed: 100,
//     typeDelay: 1000,
//     loop: true
// });
// =========================================================================================================
function SendEmail() {
    // Obtention des valeurs du formulaire
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const tel = document.getElementById("tel").value;
  
    // Validation des champs obligatoires
    if (!nom || !email || !message) {
      alert("Veuillez remplir tous les champs.");
      return; // Sortie de la fonction si un champ est vide
    }
  
    // Validation du format de l'adresse e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Veuillez saisir une adresse e-mail valide.";
      return; // Sortie si l'adresse e-mail est invalide
    } else {
      document.getElementById("emailError").textContent = ""; // Réinitialisation du message d'erreur
    }
  
    // Validation du format du numéro de téléphone (obligatoire)
    const regexPhone = /^(\+\d{1,3}\s?)?(\d{8}|\d{1,14})$/;
    if (!regexPhone.test(tel)) {
      document.getElementById("telError").textContent = "Veuillez saisir un numéro de téléphone valide (8 chiffres ou format international).";
      return; // Sortie si le numéro de téléphone est invalide
    } else {
      document.getElementById("telError").textContent = ""; // Réinitialisation du message d'erreur
    }
  
    // Construction du corps de l'e-mail
    const body = `Nom: ${nom} <br/> Email: ${email} <br/> Contact: ${tel} <br/> Message: <br/> ${message}`;
  
    // Envoi de l'e-mail
    Email.send({
      SecureToken: "054d8fdf-9931-4a22-8a88-ec8afbbf91c2",
      To: "maigaib82@gmail.com",
      From: "maigaib82@gmail.com",
      Subject: "Message de mon Portfolio",
      Body: body
    }).then(
      message => {
        alert("E-mail envoyé avec succès.");
        console.log(message);
      },
      error => {
        console.error("Erreur d'envoi de l'e-mail:", error);
        alert("Une erreur s'est produite lors de l'envoi de l'e-mail. Veuillez réessayer.");
      }
    );
  
    // Réinitialisation du formulaire
    document.getElementById("contactForm").reset();
  }
  
// function isValidEmail(email) {
//     // Expression régulière pour valider une adresse e-mail
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }



