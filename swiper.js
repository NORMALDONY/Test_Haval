
document.querySelectorAll(".auto_container").forEach(auto => {
  auto.querySelectorAll(".swiper").forEach(swip => {
    const swiper = new Swiper(swip, {direction: 'horizontal',	loop: true,});
    auto.querySelectorAll('.radio_button').forEach((radiobtn, index) => {
    radiobtn.addEventListener('click', function(event) {
    swiper.slideTo(index, 1, false);
        $('.radio_buttons .radio_button').removeClass('active');
        $('.radio_buttons .radio_button input').prop('checked', false);
        $(radiobtn).addClass('active');
        $(radiobtn).find('input').prop('checked', true);
      });
    });
  });
});


$(document).ready(function() {
  $('#phone').inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: false,
    showMaskOnFocus: false,
    showMaskOnFocus: true
  });
});