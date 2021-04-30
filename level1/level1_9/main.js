function solution(n) {
    var answer = '';
    let arr = '수박'

    var value = Math.floor(n/2)

    if(n%2 !== 0){ 
        answer = arr.repeat(value).concat('수')
    }else{
        answer = arr.repeat(value)
    }

    return answer;
}

console.log ( solution(6) )