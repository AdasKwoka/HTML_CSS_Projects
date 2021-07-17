// Add click to menu burger
const burger = document.querySelector('.burger');
const btn = document.querySelector('.menu-btn')
const menu = document.querySelector('.main-nav');
const body = document.querySelector('.wrap-body')

btn.addEventListener('click', function () {
  btn.classList.toggle("show");
  menu.classList.toggle("show");
  body.classList.toggle("move");
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
  $('.main-nav').toggleClass('show');
  $('.menu-btn').toggleClass('show');
  body.classList.toggle("move");
})