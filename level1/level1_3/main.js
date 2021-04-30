function solution(numbers) {
    var arr = [];

    for (var i = 0; i < numbers.length; i++) {
        for (var j = 1; j < numbers.length;  j++) {
            if (i !== j) {
                arr.push(numbers[i] + numbers[j])
            }
        }
    }

    var answerSet = new Set(arr)
    var answer = [...answerSet]

    answer.sort(function(a, b) {
        return a - b;
    });

    return answer
}