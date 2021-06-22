function randomBg(){
    // 랜덤 색상코드값 추출
    let newNum = '#'+Math.floor(Math.random()*16777215).toString(16);

    // 랜덤 백그라운드 만들기
    document.getElementById('randomBg').style.backgroundColor = newNum

    // 색상코드값 html 대입
    document.getElementById('colorValue').innerHTML = newNum
}
