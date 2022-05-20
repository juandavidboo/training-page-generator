document.addEventListener('DOMContentLoaded', () => {
  // REPLACE .container - full width background FIX

  $('#eb-my-items-section > .container').removeClass('container').addClass('container-fluid');

  // LOAD MORE BUTTONS

  $(".pill-card").addClass('hidden');
  $(".pill-card").slice(0, 4).show();
  if ($('.pill-card:hidden').length !== 0) {
    $('#loadMore-pill').parent().show();
  }
  $('#loadMore-pill').on('click', (e) => {
    e.preventDefault();
    // console.log($(this).parent())
    $('.pill-card:hidden').slice(0, 4).fadeIn('slow');
    if ($('.pill-card:hidden').length === 0) {
      $('#loadMore-pill').parent().fadeOut('fast');
    }
  });

  $(".ms-card").addClass('hidden');
  $(".ms-card").slice(0, 3).show();
  if ($('.ms-card:hidden').length !== 0) {
    $('#loadMore').parent().show();
  }
  $('#loadMore').on('click', (e) => {
    e.preventDefault();
    // console.log($(this).parent())
    $('.ms-card:hidden').slice(0, 3).fadeIn('slow');
    if ($('.ms-card:hidden').length === 0) {
      $('#loadMore').parent().fadeOut('fast');
    }
  });
}, false);
