function solution(n) {
    var numArray = n.toString().split('')

    numArray.sort(function(a, b) {
        return b - a;
    });

    var answer = Number(numArray.join(''))
    
    console.log(answer)

    return answer
}