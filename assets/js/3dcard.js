let cards = document.querySelectorAll('.box');

document.addEventListener('mousemove', function (e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

  cards.forEach(function(card) {
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
});
