$( document ).ready(function () {
  // mask

  $.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  $("#tel").click(function(){
    $(this).setCursorPosition(4);
  }).mask("+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9");

  

  $('.header__feedback').click(function() {
    $('.modal').addClass('visible')
  });
});

window.addEventListener('DOMContentLoaded', () => {
  // popup

  document.querySelector('.header__feedback').addEventListener('click', () => {
    document.querySelector('.modal').classList.add('visible');
  });
  //закрытие по области и крестику
  document.querySelector('.modal').addEventListener('click', (e) => {
    if (e.target.closest('.modal__close') || !e.target.closest('.modal__body')) {
      document.querySelector('.modal').classList.remove('visible');
    }
  });
  //закрытие по области по Esc
  window.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) {
      document.querySelector('.modal').classList.remove('visible');
    }
  });
});