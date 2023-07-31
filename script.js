var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


var paperMenu = {
  $window: $('#paper-window'),
  $paperFront: $('#paper-front'),
  $hamburger: $('.hamburger'),
  offset: 1800,
  pageHeight: $('#paper-front').outerHeight(),
  
  open: function() {
    this.$window.addClass('tilt');
    this.$hamburger.off('click');
    $('#container, .hamburger').on('click', this.close.bind(this));
    this.hamburgerFix(true);
    console.log('opening...');
  },
  close: function() {
    this.$window.removeClass('tilt'); 
    $('#container, .hamburger').off('click');
    this.$hamburger.on('click', this.open.bind(this));
    this.hamburgerFix(false);
    console.log('closing...');
  },
  updateTransformOrigin: function() {
    scrollTop = this.$window.scrollTop();
    equation = (scrollTop + this.offset) / this.pageHeight * 100;
    this.$paperFront.css('transform-origin', 'center ' + equation + '%');
  },
  //hamburger icon fix to keep its position
  hamburgerFix: function(opening) {
      if(opening) {
        $('.hamburger').css({
          position: 'absolute',
          top: this.$window.scrollTop() + 30 + 'px'
        });
      } else {
        setTimeout(function() {
          $('.hamburger').css({
            position: 'fixed',
            top: '30px'
          });
        }, 300);
      }
    },
  bindEvents: function() {
    this.$hamburger.on('click', this.open.bind(this));
    $('.close').on('click', this.close.bind(this));
    this.$window.on('scroll', this.updateTransformOrigin.bind(this));
  },
  init: function() {
    this.bindEvents();
    this.updateTransformOrigin();
  },
};

paperMenu.init();



const forms = document.querySelector(".forms");
const links = document.querySelectorAll(".link");



links.forEach(link => {
    link.addEventListener("click" , e => {
        e.preventDefault();
        forms.classList.toggle("show-signup")
    })
})