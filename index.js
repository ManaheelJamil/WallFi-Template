const togglebtn = document.querySelector(".icons")
const toggleicon = document.querySelector(".icons i")
const dropdown = document.querySelector(".dropdown-menu")
togglebtn.onclick = function (){
    dropdown.classList.toggle("open")
    const isopen = dropdown.classList.contains("open")
    toggleicon.classList = isopen
    ? "fa-solid fa-times"
    : "fa-solid fa-bars"
}
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var content = document.querySelector('.header');
    var scrolled = window.scrollY > content.offsetTop;
  
    if (scrolled) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  