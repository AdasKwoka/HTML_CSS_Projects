// Add click to menu burger
const burger = document.querySelector('.burger');
const btn = document.querySelector('.menu-btn')
const menu = document.querySelector('.mobile');

burger.addEventListener('click', function () {
  btn.classList.toggle("show");
  menu.classList.toggle("show");
})

// Add scroll animation

$('.go-down').on('click', function () {
  $('body, html').animate({
    scrollTop: $('#about').offset().top
  }, 500)
})

$('nav ul li a').on('click', function () {
  $('body, html').animate({
    scrollTop: $("#" + $(this).attr('class')).offset().top
  }, 500)
  $('.mobile').toggleClass('show');
  $('.menu-btn').toggleClass('show');
})