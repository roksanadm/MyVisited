/*
$('.form').magnificContact();*/




function DOMContentLoaded() {
  var buttonNode = document.querySelector('.btnflip-item btnflip__back');
  buttonNode.addEventListener('click', showForm);
}

function showForm() {
  var node = document.querySelector('#form');
  node.classList.remove('#form');
}
;

$(document).ready(function () {
  $('#form').submit(function () {
    if (document.form.name.value == '' || document.form.phone.value == '' || document.form.mail.value == '' || document.form.coment.value == '') {
      valid = false;
      return valid;
    }
    $.ajax({
      type: "POST",
      url: "index.php",
      data: $(this).serialize()
    }).done(function () {
      $('.js-overlay-thank-you').fadeIn();
      $(this).find('input').val('');
      $('#form').trigger('reset');
    });
    return false;
  });


});
//Закрыть

$('.js-close-thank-you').click(function () {
  $('.js-overlay-thank-you').fadeOut();
});
$(document).mouseup(function (e) {
  var popup = $('popup');
  if (e.target != popup[0] && popup.has(e.target).lenght === 0) {
    $('.js-overlay-thank-you').fadeOut();
  }
});

//




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
