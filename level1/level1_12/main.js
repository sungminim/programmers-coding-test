function solution(n){
    var newArray = n.toString().split('');
    var numArray = newArray.map(Number);

    var sum = numArray.reduce((a, b) => a + b);

    return sum
}

solution(123)