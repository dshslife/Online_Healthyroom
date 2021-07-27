function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

//변수 지정
var Now_Scroll = 0;

//초기설정
$('body').css('overflow', 'hidden');

//이벤트 관리
$(window).scroll(function (e) {
  Now_Scroll = $(this).scrollTop();
  console.log(Now_Scroll);
  if (Now_Scroll > 0) {
    $('.top').css('box-shadow', '0px 0px 50px -30px black');
    $('.logo').css('margin-left', '0px');
    $('.mid > img').css('opacity', 0.3);
    $('.top').css('height', '8vh');
    $('.top').css('margin-top', '0px');
  } else {
    $('.top').css('box-shadow', '');
    $('.logo').css('margin-left', '');
    $('.mid > img').css('opacity', '');
    $('.top').css('height', '');
    $('.top').css('margin-top', '');
  }
});

window.onload = () => {
  $('body').css('overflow', '');
  $('.load').animate({ opacity: 0 }, 400, 'swing', () => {
      $('.logo').css('transform', 'translateY(0px)');
      $('.mid').animate({ width: '100vw', opacity: '1' }, 800, 'swing', () => {
        $('.ti-text').css('transform', 'translateY(0px)');
        $('.ti-text').css('opacity', '1');
      });
      $('.context').css('opacity', '1');
      $('.context').css('transform', 'translateY(0px)');
      $('.quiz').css('opacity', '1');
      $('.quiz').css('transform', 'translateY(0px)');
      $('.load').hide();
    }
  );
};


$('.logo').on('click', () => {
    location.href = '/';
  });
