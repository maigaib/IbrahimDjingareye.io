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
function SendEmail(){

    let nom =document.getElementById("nom").value;
    let email =document.getElementById("email").value;
    let message =document.getElementById("message").value;
    let contact =document.getElementById("contact").value;

    let body = "Nom: " + nom + "<br/> Email: " + email + "<br/> Contact: " + contact + "<br/> Message: <br/>" + message;

    Email.send({
    SecureToken : "054d8fdf-9931-4a22-8a88-ec8afbbf91c2",
    To : 'maigaib82@gmail.com',
    From : "maigaib82@gmail.com",
    Subject : "Message de mon Portfolio",
    Body : body
    }).then(
    message => alert(message)
    );

    document.getElementById("contactForm").reset();

}


