function solution(lost, reverse) {
    // var answer = 0;

    var lostTry = lost.map((e) => {
        return e-11
    })

    var lostTry2 = lost.map((e) => {
        return e+1
    })

    var lostTryArr = new Set(lostTry.concat(lostTry2))
    var uniqueLostArr = [...lostTryArr]
    var overlapChk = [...new Set([...uniqueLostArr, ...reverse])];




    console.log(lostTryArr)
    // return answer;
}



// 1. lost의 전 후 값 배열로 만들기/중복 빼기

// 2. lost 새 배열 값과 reverse의 같은 값 갯수 찾기

// 3. lost의 갯수 - 같은 값 갯수

// 4. n에서 3 빼기

// return
solution([2, 4], [1,3,5])
