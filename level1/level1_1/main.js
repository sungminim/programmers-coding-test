
function solution(a, b) {
    var answer = 0;
    var newArray = [a, b].sort((a,b) => a-b)

    for(var i=newArray[0]; i<=newArray[1]; i++){
        answer = answer + i
    }

    return answer;
}
