

(function main() {
  document.addEventListener('DOMContentLoaded', DOMContentLoaded);

  function DOMContentLoaded() {
    var buttonNode = document.querySelector('.btnflip-item btnflip__back');
    buttonNode.addEventListener('click', showForm);
  }

  function showForm() {
    var node = document.querySelector('.contact form');
    node.classList.remove('.contact form');
  }
})();