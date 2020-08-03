
//$('.contact').magnificContact();



(function main() {
  document.addEventListener('DOMContentLoaded', DOMContentLoaded);

  function DOMContentLoaded() {
    var buttonNode = document.querySelector('.btnflip-item btnflip__back');
    buttonNode.addEventListener('click', showForm);
  }

  function showForm() {
    var node = document.querySelector('.contactForm');
    node.classList.remove('.contactForm');
  }
})();


fetch('https://api.openweathermap.org/data/2.5/weather?id=703448&appid=35727347632d7516f055c2ea2466f3e1')
  .then(function (resp) { return resp.json() })
  .then(function (data) {
    console.log(data);
    document.querySelector('.package-name').textContent = data.name;
    document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
    document.querySelector('.features li').innerHTML = '<img src ="https://openweathermap.org/img/wn/' + data.weather[0]['icon'] + '@2x.png">';

  })
  .catch(function () {

  });


//https://openweathermap.org/img/wn/02d@2x.png



document.querySelector('.nav2').onmouseenter = () => {
  document.querySelector('.nav2').style.background = 'gray';
  console.log(1);
}




document.querySelector('.active').onmouseenter = () => {
  document.querySelector('.active').style.background = 'white';
}
document.querySelector('.active').onmouseleave = () => {
  document.querySelector('.active').style.background = ' black';
  document.querySelector('.active').style.opacity = 0.8;
}



//linav2
document.querySelector('.nav2').onmouseleave = () => {
  document.querySelector('.nav2').style.background = 'whitesmoke';
  document.querySelector('.nav2').style.opacity = 0.8;

  console.log(1);
}
