function randomBg(){
    // 색깔 배열 선언
    let colorsArray = ['red', 'blue', ' green', 'violet', 'yellow', 'pink', 'purple']

    // 색깔 배열 중 랜덤 추출
    let random = colorsArray[Math.floor(Math.random() * colorsArray.length)];

    // 랜덤 백그라운드 만들기
    document.getElementById('randomBg').style.backgroundColor = random
}
