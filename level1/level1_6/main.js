function solution(s) {
    let sArray = s.split('');

    let descending = (a,b) => {
        return (b<a)?-1 : (b==a)?0:1;
    } 
    
    let answer = sArray.sort(descending).join('')
    return answer
}

console.log(  (solution('Zbdcevd')) )

/* 모범답변

function solution(s) {
    return s
    .split("")
    .sort()
    .reverse()
    .join("");
}

*/

