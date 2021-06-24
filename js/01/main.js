
function randomBg(){
    // 색깔 배열 선언
    let colorsArray = ['red', 'blue', ' green', 'violet', 'yellow', 'pink', 'purple']

    // 색깔 배열 중 랜덤 Index 값 추출
    let randomIndex = colorsArray[Math.floor(Math.random() * colorsArray.length)];

    // 랜덤 백그라운드 만들기
    document.getElementById('randomBg').style.backgroundColor = randomIndex
}


