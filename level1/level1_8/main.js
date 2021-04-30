function solution(a, b) {

    var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var answer = week[new Date(`2016-${a}-${b}`).getDay()];

    return answer;
}

console.log( solution(5,24) )