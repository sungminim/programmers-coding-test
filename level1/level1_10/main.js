function solution(arr)
{
    var answer = [];

    let newArr = arr.filter((value, index, array) => 
        index != index+1
    )

    return answer;
}

console.log (solution([1,3,4,5,6,7]) )