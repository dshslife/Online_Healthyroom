var quizs = {
  q1: {
    title: '2021-07-27',
    quiz: '안녕하세요! 1번 문제',
    answer: 1,
  },
  q2: {
    title: '2021-07-27',
    quiz: '안녕하세요! 2번 문제',
    answer: 0,
  },
  q3: {
    title: '2021-07-27',
    quiz: '안녕하세요! 3번 문제',
    answer: 1,
  },
};

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

//HTML 추가
for (var i = 1; i <= Object.keys(quizs).length; i++) {
  console.log(i);
  var html = format(
    '<div class="swiper-slide"><div class="span"><h1 style="font-size:8vw;">{0}</h1><p class="p-te b1">{1}</p></div></div>',
    quizs['q' + i].title,
    quizs['q' + i].quiz
  );

  swiper.addSlide(i, html);
}

$('#O').on('click', () => {Answer_Check(swiper.activeIndex, 1);});
$('#X').on('click', () => {Answer_Check(swiper.activeIndex, 0);});

function Answer_Check(num, input) {
    console.log(num);
    var as = quizs['q' + (num + 1)].answer;
    if (as == input) {
        alert('정답입니다.');
        swiper.slideNext();
    } else {
        alert('오답입니다.');
    }
}
