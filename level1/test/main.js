// function solution(s, n) {
//     // var answer = '';
//     // return answer;

//     let enArray = s.split('');
//     let newArray = enArray.map( (e) => e.charCodeAt(0))
//     let newArray2 = newArray.map( (e) => {
//         if(e === 32){
//             return e
//         } else if (e === 90) {
//             return 65 + (n - 1)
//         } else if (e === 122) {
//             return 97 + (n - 1)
//         } else {
//             return e + n
//         }
//     })

//     newArray2 = newArray2.map((e) => 
//         String.fromCharCode(e)
//     )

//     newArray2 = newArray2.join('')
    

//     console.log(newArray2)

//     return newArray2
// }

// solution("y X Z", 4)

// /*

// 1. 배열
// 2. 아스키 코드
// 3. 각각 n 플러스
// 4. join
// 5. 60이면 +1 안먹히게
// */