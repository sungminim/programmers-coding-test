function solution(arr) {
    let answer = [];
    // return answer;

    let minVal = Math.min.apply(null, arr) 
    let minIndex = arr.indexOf(minVal)

    console.log(arr.indexOf(minVal))
    

    if(arr.length === 1) {
        answer = [-1]
    }else{
        answer = arr.splice(2,1)
    }
    console.log(answer)
    return answer
}

solution([4,3,2,1])