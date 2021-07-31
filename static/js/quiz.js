//슬라이더 정의
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//문자열 포맷팅 함수 정의
function format() {
  var args = Array.prototype.slice.call(arguments, 1);
  return arguments[0].replace(/\{(\d+)\}/g, function (match, index) {
    return args[index];
  });
}

var quizs;

axios.get('/api/quizs')
  .then(resp => {
    quizs = resp.data;
    
    for (var i = 0; i < quizs.length; i++) {
      var html = format(
        '<div class="swiper-slide"><div class="span"><h1 style="font-size:8vw;">{0}</h1><br><p class="p-te b1">{1}</p></div></div>',
        'OX 퀴즈',
        quizs[i].quiz
      );
    
      swiper.addSlide(i, html);
    }
  })

$('#O').on('click', () => { Answer_Check(swiper.activeIndex, 1); });
$('#X').on('click', () => { Answer_Check(swiper.activeIndex, 0); });

function Answer_Check(num, input) {
  var as = quizs[num].answer;
  if (as == input) {
    alert('정답입니다.');
    swiper.slideNext();
  } else {
    alert('오답입니다.');
  }
}
