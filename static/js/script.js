var rgb = [];
for (var i = 0; i <= 8; i++) {
    rgb = [Math.random() * 1000 % 256, Math.random() * 1000 % 256, Math.random() * 1000 % 256];
    $('.content').children()[i].style.backgroundColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
}

$('#l1').on('click', () => {
    location.href='t/1';
});


$('#l2').on('click', () => {
    location.href='t/2';
});

$('#l3').on('click', () => {
    location.href='t/3';
});


$('#l4').on('click', () => {
    location.href='t/4';
});

$('#l5').on('click', () => {
    location.href='t/5';
});

$('#l6').on('click', () => {
    location.href='t/6';
});

$('#l7').on('click', () => {
    location.href='t/7';
});

$('#l8').on('click', () => {
    location.href='t/8';
});

$('#l9').on('click', () => {
    location.href='t/9';
});
